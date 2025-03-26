// TODO test / finish this

export async function fetchRepositories(username: string): Promise<any[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
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
}

export async function fetchProjectDetails(username: string): Promise<ProjectDetail[]> {
  try {
    // Fetch all repositories for the user
    const repositories = await fetchRepositories(username);
    
    // Process each repository to get detailed information
    const projectDetails = await Promise.all(
      repositories.map(async (repo) => {
        try {
          // Fetch DESC.md content
          const descContent = await fetchDescFile(username, repo.name);
          
          // Parse DESC.md to extract image and description
          const { image, description } = parseDescContent(descContent);
          
          return {
            name: repo.name,
            image,
            description,
            topics: repo.topics || [],
            repoUrl: repo.html_url
          };
        } catch (error) {
          console.log(`No DESC.md found for ${repo.name}, skipping...`);
          return null;
        }
      })
    );
    
    // Filter out repositories without DESC.md files
    return projectDetails.filter(Boolean) as ProjectDetail[];
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
        Accept: 'application/vnd.github.v3.raw'
      }
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to get DESC.md for ${repo}`);
  }
  
  return await response.text();
}

// Helper function to parse DESC.md content
function parseDescContent(content: string): { image: string; description: string } {
  // Extract image URL - assuming it's in markdown format ![alt](url)
  const imageRegex = /!\[.*?\]\((.*?)\)/;
  const imageMatch = content.match(imageRegex);
  
  let image = '';
  if (imageMatch && imageMatch[1]) {
    image = imageMatch[1];
  }
  
  // Get description text (everything after the image)
  let description = content;
  if (imageMatch) {
    description = content.replace(imageMatch[0], '').trim();
  }
  
  return { image, description };
}
