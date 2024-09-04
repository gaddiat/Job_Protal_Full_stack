import axios from 'axios';

const API_BASE_URL = "http://localhost:8080"; // Spring Boot Backend URL

export const getAllPosts = () => {
    return axios.get(`${API_BASE_URL}/posts`);
};

export const addPost = (post) => {
    return axios.post(`${API_BASE_URL}/addposts`, post);
};

export const searchPosts = (text) => {
    return axios.get(`${API_BASE_URL}/posts/${text}`);
};
