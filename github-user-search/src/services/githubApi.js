import axios from 'axios';

const apiKey = import.meta.env.VITE_GITHUB_API_KEY;

const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `token ${apiKey}`, 
  },
});

export const searchGithubUsers = async (username) => {
  try {
    const response = await githubApi.get(`/search/users?q=${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    throw error;
  }
};
