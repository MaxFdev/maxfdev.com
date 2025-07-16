// TODO finalize all functions
// TODO add caching

export async function fetchRepositories(username: string): Promise<any[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      next: { revalidate: 43200 },
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to get repos for ${username}`);
  }
  return await response.json();
}

interface ProjectDetail {
  name: string;
  image: string;
  description: string;
  topics: string[];
  repoUrl: string;
  rank: number;
  backgroundColor: string;
}

export async function fetchProjectDetails(
  username: string
): Promise<ProjectDetail[]> {
  try {
    // Fetch all repositories for the user
    const repositories = await fetchRepositories(username);

    // Process each repository to get detailed information
    const projectDetails = await Promise.all(
      repositories.map(async (repo) => {
        try {
          // Fetch DESC.md content
          const descContent = await fetchDescFile(username, repo.name);

          // Parse DESC.md to extract image, description, rank, and backgroundColor
          const { image, description, rank, backgroundColor } =
            parseDescContent(descContent);

          return {
            name: repo.name,
            image,
            description,
            topics: repo.topics || [],
            repoUrl: repo.html_url,
            rank,
            backgroundColor,
          };
        } catch (error) {
          console.log(`No DESC.md found for ${repo.name}, skipping...`);
          return null;
        }
      })
    );

    // Filter out repositories without DESC.md files
    const filteredProjects = projectDetails.filter(Boolean) as ProjectDetail[];

    // Sort projects by rank (higher ranks first)
    return filteredProjects.sort((a, b) => b.rank - a.rank);
  } catch (error) {
    console.error("Error fetching project details:", error);
    return [];
  }
}

// Helper function to fetch DESC.md file from a repository
async function fetchDescFile(owner: string, repo: string): Promise<string> {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/DESC.md`,
    {
      headers: {
        Accept: "application/vnd.github.v3.raw",
      },
      next: { revalidate: 43200 },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to get DESC.md for ${repo}`);
  }

  return await response.text();
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
