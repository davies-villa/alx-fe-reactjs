import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${username}`);
      const data = await response.json();
      setUsers(data.items); 
    } catch (err) {
      setError("Looks like we can't find any users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {users.length > 0 && ( 
        <div>
          {users.map(user => ( 
            <div key={user.id}>
              <h2>{user.login}</h2>
              <p>Public Repositories: {user.public_repos}</p> 
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
