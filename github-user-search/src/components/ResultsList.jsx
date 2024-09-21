import React from 'react';

const ResultsList = ({ results, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Looks like we can't find the user.</p>;

  return (
    <div className="mt-4">
      {results.map(user => (
        <div key={user.id} className="border-b py-2">
          <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full inline" />
          <h2 className="font-semibold">{user.login}</h2>
          <p>Location: {user.location || 'N/A'}</p>
          <p>Repositories: {user.public_repos || 0}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
};

export default ResultsList;
