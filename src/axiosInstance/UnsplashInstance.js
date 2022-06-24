// To be used only in node.js environment.

const axios = require('axios');


const unsplashInstance = axios.create({
  baseURL: "https://api.unsplash.com",
});

unsplashInstance.interceptors.request.use((config) => {
  const token = process.env.UNSPLASH_ACCESS_KEY;
  config.headers.Authorization = `Client-ID ${token}`;
  return config;
});

export default unsplashInstance;
