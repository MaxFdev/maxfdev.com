"use client";

import React, { useEffect, useState } from "react";
import { fetchRepositories, fetchReadme } from "@/utils/projects";

// TODO stylize the component
// TODO make the information able to create projects to put in the carousel

interface ReadmeListProps {
  username: string;
}

const readmes: React.FC<ReadmeListProps> = ({ username }) => {
  const [repositories, setRepositories] = useState<any[]>([]);
  const [readmes, setReadmes] = useState<{ [key: string]: string }>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        const repos = await fetchRepositories(username);
        setRepositories(repos);

        const readmePromises = repos.map(async (repo) => {
          const readme = await fetchReadme(username, repo.name);
          return { repo: repo.name, content: readme };
        });

        const readmesData = await Promise.all(readmePromises);
        const readmeMap = readmesData.reduce((acc, curr) => {
          acc[curr.repo] = curr.content;
          return acc;
        }, {} as { [key: string]: string });

        setReadmes(readmeMap);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error occurred.");
        }
      }
    };

    loadRepositories();
  }, [username]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Repositories for {username}</h2>
      {repositories.length === 0 ? (
        <p>No repositories found.</p>
      ) : (
        repositories.map((repo) => (
          <div
            key={repo.id}
            className="w-full"
          >
            {/* FIXME make this produce output */}
            <h3>{repo.name}</h3>
            {readmes[repo.name].split("").map((line, num) => (
              <p key={num}>
                {line}
                <br />
              </p>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default readmes;
