import React, { useState } from 'react';
import { addPost } from '../services/PostService'; // Adjust the import path accordingly

const AddPost = () => {
    const [post, setPost] = useState({
        profile: '',
        desc: '',
        exp: 0,
        techs: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Handle techs as comma-separated values and convert exp to number
        if (name === 'techs') {
            setPost({
                ...post,
                [name]: value.split(',').map(tech => tech.trim())
            });
        } else if (name === 'exp') {
            setPost({
                ...post,
                [name]: Number(value) // Convert the value to a number
            });
        } else {
            setPost({
                ...post,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(post)
            .then(response => {
                alert('Post added successfully');
                setPost({
                    profile: '',
                    desc: '',
                    exp: 0,
                    techs: []
                }); // Reset form after successful submission
            })
            .catch(error => {
                alert('Error adding post');
                console.error('Error adding post:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="profile"
                value={post.profile}
                onChange={handleChange}
                placeholder="Profile"
            />
            <input
                name="desc"
                value={post.desc}
                onChange={handleChange}
                placeholder="Description"
            />
            <input
                name="exp"
                value={post.exp}
                onChange={handleChange}
                placeholder="Experience"
                type="number"
            />
            <input
                name="techs"
                value={post.techs.join(', ')} // Convert array to comma-separated string
                onChange={handleChange}
                placeholder="Technologies (comma separated)"
            />
            <button type="submit">Add Post</button>
        </form>
    );
};

export default AddPost;
