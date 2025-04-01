import React from 'react';
import { fetchProjectDetails } from '@/utils/projects';
import Link from 'next/link';
import Image from 'next/image';

// Define the extended ProjectDetail interface
interface ProjectDetail {
    name: string;
    image: string;
    description: string;
    topics: string[];
    repoUrl: string;
    rank?: number;
    backgroundColor?: string;
}

export default async function ProjectsPage() {
    // Fetch projects (using GitHub username)
    const projects = await fetchProjectDetails('MaxFdev'); // Replace with your GitHub username
    
    // Sort projects by rank if available
    const sortedProjects = [...projects].sort((a, b) => {
        const rankA = (a as any).rank || 0;
        const rankB = (b as any).rank || 0;
        return rankB - rankA; // Higher rank first
    });

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">My Projects</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProjects.map((project) => (
                    <div 
                        key={project.name}
                        className="border rounded-lg overflow-hidden shadow-md"
                        style={{ backgroundColor: (project as any).backgroundColor || '#ffffff' }}
                    >
                        {project.image && (
                            <div className="relative h-48 w-full">
                                <Image 
                                    src={project.image} 
                                    alt={project.name} 
                                    fill 
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        )}
                        
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.topics.map(topic => (
                                    <span 
                                        key={topic} 
                                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                            
                            <Link 
                                href={project.repoUrl}
                                target="_blank"
                                className="text-blue-500 hover:underline"
                            >
                                View on GitHub
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}