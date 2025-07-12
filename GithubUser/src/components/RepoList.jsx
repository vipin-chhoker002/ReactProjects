import React from "react";
import { useGitHub } from "../context/GitHubContext";

function RepoList() {
    const { repoList } = useGitHub();

    if (!repoList || repoList.length === 0) return <p>No repositories found.</p>;

    return (
        <div className="grid gap-4 mt-4">
            {repoList.map((repo) => (
                <div key={repo.id} className="p-4 border rounded shadow hover:shadow-lg transition">
                    <h3 className="text-lg font-semibold">
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                            {repo.name}
                        </a>
                    </h3>
                    <p className="text-sm text-gray-600">{repo.description || "No description"}</p>
                    <div className="text-xs mt-1 text-gray-500">
                        ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RepoList;
