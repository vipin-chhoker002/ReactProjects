import React from "react";
import { useGitHub } from "../context/GitHubContext";

function RepoDrawer() {
    const { repoList, isDrawerOpen, setIsDrawerOpen } = useGitHub();

    if (!isDrawerOpen) return null;

    return (
        <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 p-4 overflow-y-auto transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Repositories</h2>
                <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-red-600 font-bold text-lg"
                >
                    ✕
                </button>
            </div>

            {repoList.length === 0 ? (
                <p>No repositories available.</p>
            ) : (
                repoList.map((repo) => (
                    <div key={repo.id} className="border-b py-2">
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            {repo.name}
                        </a>
                        <p className="text-sm text-gray-600">{repo.description || "No description"}</p>
                        <div className="text-xs text-gray-500">
                            ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default RepoDrawer;
