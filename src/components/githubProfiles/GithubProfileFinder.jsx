import { useEffect, useState } from "react";

function User({ user }) {
    return (
        <div className="user-info">
            <img src={user.avatar_url} alt="Profile" width="150" />
            <h2>{user.name || user.login}</h2>
            <p>{user.bio || "No bio available"}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                Visit Profile
            </a>
        </div>
    );
}

export default function GithubProfileFinder() {
    const [userName, setUserName] = useState("sangammukherjee");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchGithubUserData() {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(
                `https://api.github.com/users/${userName.trim()}`
            );
            if (!res.ok) {
                throw new Error("User not found!");
            }
            const data = await res.json();
            if (data) {
                setUserData(data);
            }
        } catch (error) {
            setError(error.message);
            setUserData(null);
        } finally {
            setLoading(false);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetchGithubUserData();
    }

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    if (loading) {
        return <h1>Loading data! Please wait...</h1>;
    }

    return (
        <div className="github-profile-container">
            <form className="input-wrapper" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search-by-username"
                    placeholder="Search Github Username..."
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {error && <p className="error">{error}</p>}
            {userData !== null ? <User user={userData} /> : null}
        </div>
    );
}
