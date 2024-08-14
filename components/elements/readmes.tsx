"use client";

import React, { useEffect, useState } from "react";
import { fetchRepositories, fetchReadme } from "@/utils/projects";

interface ReadmeListProps {
  username: string;
}

// TODO finish this

const readmes = () => {
  const ReadmeList: React.FC<ReadmeListProps> = ({ username }) => {
    const [repositories, setRepositories] = useState<any[]>([]);
    const [readmes, setReadmes] = useState<{ [key: string]: string }>({});
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const loadRepos = async () = {
        try {
          const repos = await fetchRepositories(username);
          setRepositories(repos);
        }
      }
    })
  };

  return <div></div>;
};

export default readmes;
