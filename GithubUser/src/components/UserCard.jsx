import React from "react";
import { useGitHub } from "../context/GitHubContext";

function UserProfile() {
    const { userData, setIsDrawerOpen } = useGitHub();

    if (!userData) return null;

    const createdDate = new Date(userData.created_at);
    const today = new Date();
    const activeDays = Math.floor((today - createdDate) / (1000 * 60 * 60 * 24));

    return (
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-6">
            <img
                src={userData.avatar_url}
                alt="avatar"
                className="w-32 h-32 rounded-full border-2 border-blue-500"
            />

            <div className="flex-1 space-y-2">
                <h2 className="text-2xl font-bold">{userData.name || userData.login}</h2>
                <p className="text-gray-600">{userData.bio}</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700 mt-4">
                    <div><strong>Username:</strong> {userData.login}</div>
                    <div><strong>Public Repos:</strong> {userData.public_repos}</div>
                    <div><strong>Followers:</strong> {userData.followers}</div>
                    <div><strong>Following:</strong> {userData.following}</div>
                    <div><strong>Active Days:</strong> {activeDays}</div>
                    <div><strong>Location:</strong> {userData.location || "N/A"}</div>
                    <div><strong>Company:</strong> {userData.company || "N/A"}</div>
                    <div><strong>Email:</strong> {userData.email || "Not Public"}</div>
                    <div><strong>Created On:</strong> {createdDate.toDateString()}</div>
                </div>

                {userData.blog && (
                    <p className="mt-2">
                        🔗 <a href={userData.blog} className="text-blue-500 underline" target="_blank" rel="noreferrer">
                            Visit Website
                        </a>
                    </p>
                )}

                <p className="mt-2">
                    🧑‍💻 <a href={userData.html_url} className="text-blue-500 underline" target="_blank" rel="noreferrer">
                        View GitHub Profile
                    </a>
                </p>

                <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
                >
                    View Repositories
                </button>
            </div>
        </div>
    );
}

export default UserProfile;
