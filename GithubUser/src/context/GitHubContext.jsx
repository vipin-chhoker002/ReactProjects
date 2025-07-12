import { createContext, useContext, useState, useEffect } from "react";

const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [repoList, setRepoList] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [lastSearches, setLastSearches] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("lastGitHubSearches");
        if (saved) {
            setLastSearches(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("lastGitHubSearches", JSON.stringify(lastSearches));
    }, [lastSearches]);

    const addToLastSearches = (user) => {
        setLastSearches((prev) => {
            const updated = [user, ...prev.filter((u) => u.login !== user.login)];
            return updated.slice(0, 10);
        });
    };

    const clearLastSearches = () => {
        setLastSearches([]);
        localStorage.removeItem("lastGitHubSearches");
    };

    return (
        <GitHubContext.Provider
            value={{
                userData,
                setUserData,
                repoList,
                setRepoList,
                isDrawerOpen,
                setIsDrawerOpen,
                lastSearches,
                addToLastSearches,
                clearLastSearches,
            }}
        >
            {children}
        </GitHubContext.Provider>
    );
};

export const useGitHub = () => useContext(GitHubContext);
