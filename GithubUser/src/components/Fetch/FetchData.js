const fetchData = async (username) => {
    try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error("User not found");

        const userData = await userRes.json();

        const repoRes = await fetch(userData.repos_url);
        if (!repoRes.ok) throw new Error("Repos not found");

        const repos = await repoRes.json();
        return { userData, repos };
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        alert("user not found");
        return { userData: null, repos: [] };
    }
};

export default fetchData;
