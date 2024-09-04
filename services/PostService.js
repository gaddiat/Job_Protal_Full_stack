import axios from 'axios';

const API_BASE_URL = "http://localhost:8080"; // Spring Boot Backend URL

export const getAllPosts = () => {
    return axios.get(`${API_BASE_URL}/posts`);
};

export const addPost = (post) => {
    return axios.post(`${API_BASE_URL}/addposts`, post);
};

export const searchPosts = (text) => {
    const encodedText = encodeURIComponent(text); // Encode the text parameter
    const url = `${API_BASE_URL}/posts/${encodedText}`;
    console.log("Constructed URL:", url); // Log the URL being used for the request
    return axios.get(url)
        .then(response => {
            console.log("API response:", response); // Log the API response
            return response;
        })
        .catch(error => {
            console.error("API error:", error); // Log any API errors
            throw error; // Rethrow to handle it in the component
        });
};

