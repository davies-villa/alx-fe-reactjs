import axios from 'axios';

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async ({ username, location, minRepos }) => {
  let query = username;

  if (location) {
    query += `+location:${location}`;
  }
  if (minRepos) {
    query += `+repos:>${minRepos}`;
  }

  try {
    const response = await axios.get(`${BASE_URL}${query}`);
    return response.data.items;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
};
