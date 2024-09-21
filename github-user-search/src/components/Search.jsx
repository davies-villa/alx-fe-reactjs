import React, { useState } from 'react';
import { fetchUserData } from './services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await fetchUserData({ username, location, minRepos });
      setResults(data);
      if (data.length === 0) setError('No users found');
    } catch (err) {
      setError('Error fetching data');
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-xl font-bold mb-4 text-center">GitHub User Search</h1>

          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter GitHub username"
            />
          </div>

          {/* Location Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter location"
            />
          </div>

          {/* Minimum Repos Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minRepos">
              Minimum Repositories
            </label>
            <input
              id="minRepos"
              type="number"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter minimum repo count"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Search
            </button>
          </div>
        </form>

        {/* Results Section */}
        <div className="bg-white shadow-md rounded px-8 py-6 mt-4">
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {results.length > 0 && (
            <ul className="space-y-4">
              {results.map((user) => (
                <li key={user.id} className="flex items-center space-x-4">
                  <img src={user.avatar_url} alt={user.login} className="w-10 h-10 rounded-full" />
                  <div>
                    <a href={user.html_url} className="font-bold text-blue-500 hover:underline">{user.login}</a>
                    <p>{user.location}</p>
                    <p>Repos: {user.public_repos}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
