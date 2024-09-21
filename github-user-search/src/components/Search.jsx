import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (error) {
            setError('Looks like we can’t find the user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleFormSubmit} className="flex flex-col items-center gap-4">
                <input
                    type="text"
                    placeholder="Search GitHub Username"
                    value={username}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                >
                    Search
                </button>
            </form>


            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData && (
                <div className="user-details">
                    <img src={userData.avatar_url} alt={userData.login} className="avatar flex items-center justify-center" />
                    <h2>{userData.name}</h2>
                    <p>
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                            Visit Profile
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Search;
