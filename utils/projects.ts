interface ProjectDetail {
  name: string;
  image: string;
  description: string;
  topics: string[];
  repoUrl: string;
  rank: number;
  backgroundColor: string;
}

const cache: Record<string, { data: any; expiry: number }> = {};
const CACHE_DURATION = 86400 * 1000; // 1 day in ms

function getCached(key: string) {
  const entry = cache[key];
  if (entry && entry.expiry > Date.now()) {
    return entry.data;
  }
  return null;
}

function setCached(key: string, data: any) {
  cache[key] = { data, expiry: Date.now() + CACHE_DURATION };
}

/**
 * @param username - The GitHub username whose project details are to be fetched.
 * @returns A promise that resolves to an array of `ProjectDetail` objects, sorted by rank.
 */
export async function fetchProjectDetails(
  username: string
): Promise<ProjectDetail[]> {
  if (!username || username === "") {
    return [];
  }

  const cacheKey = `details_${username}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  try {
    const repositories = await fetchRepositories(username);
    const projectDetails = await Promise.all(
      repositories.map(async (repo) => {
        try {
          const descContent = await fetchDescFile(username, repo.name);
          const { image, description, rank, backgroundColor } = parseDescContent(descContent);
          return {
            name: repo.name,
            image,
            description,
            topics: repo.topics || [],
            repoUrl: repo.html_url,
            rank,
            backgroundColor,
          };
        } catch (error: any) {
          // DESC.md missing or fetch failed, log and skip
          console.warn(`No DESC.md found for ${repo.name}: ${error.message}`);
          return null;
        }
      })
    );
    const filteredProjects = projectDetails.filter(Boolean) as ProjectDetail[];
    const sorted = filteredProjects.sort((a, b) => b.rank - a.rank);
    setCached(cacheKey, sorted);
    return sorted;
  } catch (error: any) {
    console.error(`Error fetching project details for ${username}:`, error);
    return [];
  }
}

/**
 * @param username - The GitHub username whose repositories are to be fetched.
 * @returns A promise that resolves to an array of repository objects.
 * @throws If the request to the GitHub API fails.
 */
export async function fetchRepositories(username: string): Promise<any[]> {
  const cacheKey = `repos_${username}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  try {
    const response = await safeFetch(
      `https://api.github.com/users/${username}/repos`,
      {
        cache: "force-cache",
        next: { revalidate: 86400 },
      },
      `Failed to get repos for ${username}`
    );
    const data: any = await response.json();
    setCached(cacheKey, data);
    return data;
  } catch (err: any) {
    console.error(`Error fetching repositories for ${username}:`, err);
    throw err;
  }
}

/**
 * @param owner - The GitHub username or organization that owns the repository.
 * @param repo - The name of the repository.
 * @returns A promise that resolves to the raw text content of the `DESC.md` file.
 * @throws If the file cannot be retrieved from the repository.
 */
async function fetchDescFile(owner: string, repo: string): Promise<string> {
  const cacheKey = `desc_${owner}_${repo}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  try {
    const response = await safeFetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/DESC.md`,
      {
        headers: {
          Accept: "application/vnd.github.v3.raw",
        },
        cache: "force-cache",
        next: { revalidate: 86400 },
      },
      `Failed to get DESC.md for ${repo}`
    );
    const text = await response.text();
    setCached(cacheKey, text);
    return text;
  } catch (err: any) {
    throw new Error(`DESC.md fetch error for ${repo}: ${err.message}`);
  }
}

async function safeFetch(url: string, options?: RequestInit, errorMsg?: string): Promise<Response> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(`${errorMsg || "Fetch failed"} (${response.status}): ${text}`);
    }
    return response;
  } catch (err: any) {
    console.error(errorMsg || "Network error", err);
    throw new Error(`${errorMsg || "Network error"}: ${err.message}`);
  }
}

// Helper function to parse DESC.md content
function parseDescContent(content: string): {
  image: string;
  description: string;
  rank: number;
  backgroundColor: string;
} {
  // Extract image URL - assuming it's in markdown format ![alt](url)
  const imageRegex = /Image:\s*(.*)/i;
  const imageMatch = content.match(imageRegex);
  let image = "";
  if (imageMatch && imageMatch[1]) {
    image = imageMatch[1];
  }

  // Extract rank - format "Rank: #" where # is 0-2
  const rankRegex = /Rank:\s*(\d+)/i;
  const rankMatch = content.match(rankRegex);
  let rank = 0; // Default rank
  if (rankMatch && rankMatch[1]) {
    const parsedRank = parseInt(rankMatch[1], 10);
    // Ensure rank is between 0 and 2
    if (parsedRank >= 0 && parsedRank <= 2) {
      rank = parsedRank;
    }
  }

  // Extract background color - format "Color: Hex"
  const colorRegex = /Color:\s*(#?[A-Fa-f0-9]{6}|#?[A-Fa-f0-9]{3})/i;
  const colorMatch = content.match(colorRegex);
  let backgroundColor = ""; // Default empty string for background color
  if (colorMatch && colorMatch[1]) {
    // Ensure the hex color has a # prefix
    backgroundColor = colorMatch[1].startsWith("#")
      ? colorMatch[1]
      : "#" + colorMatch[1];
  }

  // Get description text (everything after removing metadata)
  let description = content;

  // Remove all metadata markers from description
  if (imageMatch) {
    description = description.replace(imageMatch[0], "");
  }
  if (rankMatch) {
    description = description.replace(rankMatch[0], "");
  }
  if (colorMatch) {
    description = description.replace(colorMatch[0], "");
  }

  // Clean up whitespace, including newlines at start/end
  description = description.trim();

  return { image, description, rank, backgroundColor };
}
