import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async ({ username, location, minRepos }) => {
  const query = `${username ? `user:${username}` : ''} ${location ? `location:${location}` : ''} ${minRepos ? `repos:>=${minRepos}` : ''}`;
  
  const response = await axios.get(`${GITHUB_API_BASE_URL}`, {
    params: {
      q: query.trim(),
      per_page: 10 // 
    }
  });
  
  return response.data.items;
};
