import React, { useState } from "react";
import fetchData from "./Fetch/FetchData";
import { useGitHub } from "../context/GitHubContext";
import { motion, AnimatePresence } from "framer-motion";

function SearchBar() {
    const [input, setInput] = useState("");
    const {
        setUserData,
        setRepoList,
        setIsDrawerOpen,
        addToLastSearches,
        lastSearches,
        clearLastSearches,
    } = useGitHub();

    const handleSearch = async (username) => {
        setUserData(null);
        setRepoList([]);
        setIsDrawerOpen(false);

        const { userData, repos } = await fetchData(username);
        if (userData) {
            setUserData(userData);
            setRepoList(repos);
            addToLastSearches(userData);
        }
    };

    return (
        <div className="mb-6">
            <div className="flex items-center gap-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter GitHub username..."
                    className="flex-1 p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={() => handleSearch(input)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Search
                </button>
            </div>

            <AnimatePresence>
                {lastSearches.length > 0 && (
                    <motion.div
                        className="mt-4 bg-gray-50 p-4 rounded-lg shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm font-semibold">🔁 Recent Searches</h3>
                            <button
                                onClick={clearLastSearches}
                                className="text-xs text-red-500 hover:underline"
                            >
                                Clear All
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {lastSearches.map((user) => (
                                <motion.button
                                    key={user.id}
                                    onClick={() => handleSearch(user.login)}
                                    className="flex items-center gap-2 bg-white text-sm px-3 py-1 rounded border border-gray-300 hover:bg-blue-50 transition"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    layout
                                >
                                    <img
                                        src={user.avatar_url}
                                        alt={user.login}
                                        className="w-5 h-5 rounded-full"
                                    />
                                    {user.login}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default SearchBar;
