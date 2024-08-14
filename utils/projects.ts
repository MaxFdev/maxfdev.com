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

export async function fetchReadme(
  owner: string,
  repo: string
): Promise<string> {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/readme`,
    {
        headers: {
            Accept: 'application/vnd.github.v3.raw'
        }
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to get README for user ${owner}'s repo ${repo}`);
  }
  return await response.text();
}
