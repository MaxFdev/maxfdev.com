interface ProjectDetail {
  name: string;
  image: string;
  description: string;
  topics: string[];
  repoUrl: string;
  rank: number;
  backgroundColor: string;
}

const CACHE_DURATION = 86400 * 1000; // 1 day in ms

function getCached(key: string) {
  if (typeof window === "undefined" || !window.localStorage) return null;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (entry && entry.expiry > Date.now()) {
      return entry.data;
    }
  } catch {
    return null;
  }
  return null;
}

function setCached(key: string, data: any) {
  if (typeof window === "undefined" || !window.localStorage) return;
  try {
    const entry = { data, expiry: Date.now() + CACHE_DURATION };
    window.localStorage.setItem(key, JSON.stringify(entry));
  } catch {
    // ignore
  }
}

/**
 * Consolidated function to fetch project details for a GitHub user.
 * @param username - The GitHub username whose project details are to be fetched.
 * @returns A promise that resolves to an array of `ProjectDetail` objects, sorted by rank.
 */
export async function fetchProjectDetails(username: string): Promise<ProjectDetail[]> {
  if (!username || username === "") {
    return [];
  }

  const cacheKey = `details_${username}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  // Helper to fetch with error handling
  async function safeFetch(url: string, options?: RequestInit): Promise<Response | null> {
    try {
      const response = await fetch(url, options);
      if (!response.ok) return null;
      return response;
    } catch {
      return null;
    }
  }

  // Fetch repositories
  const reposCacheKey = `repos_${username}`;
  let repositories = getCached(reposCacheKey);
  if (!repositories) {
    const repoRes = await safeFetch(
      `https://api.github.com/users/${username}/repos`
    );
    if (!repoRes) {
      console.error(`Error fetching repositories for ${username}`);
      return [];
    }
    repositories = await repoRes.json();
    setCached(reposCacheKey, repositories);
  }

  // Fetch DESC.md for each repo, ignore repos where DESC.md is missing
  const details: ProjectDetail[] = [];
  for (const repo of repositories) {
    const descCacheKey = `desc_${username}_${repo.name}`;
    let descContent = getCached(descCacheKey);
    if (!descContent) {
      const descRes = await safeFetch(
        `https://api.github.com/repos/${username}/${repo.name}/contents/DESC.md`,
        {
          headers: { Accept: "application/vnd.github.v3.raw" }
        }
      );
      if (!descRes) {
        // DESC.md missing, skip repo
        continue;
      }
      descContent = await descRes.text();
      setCached(descCacheKey, descContent);
    }
    const { image, description, rank, backgroundColor } = parseDescContent(descContent);
    details.push({
      name: repo.name,
      image,
      description,
      topics: repo.topics || [],
      repoUrl: repo.html_url,
      rank,
      backgroundColor,
    });
  }
  const sorted = details.sort((a, b) => b.rank - a.rank);
  setCached(cacheKey, sorted);
  return sorted;
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
