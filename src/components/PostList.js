import React, { useEffect, useState } from 'react';
import { getAllPosts } from '/Users/amitgaddi/Documents/Learning/React/post-app/src/services/PostService.js';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then(response => {
            setPosts(response.data);
        });
    }, []);

    return (
        <div>
            <h2>All Posts</h2>
            <ul>
                {posts.map((post, index) => (
                    <li key={post.profile + '-' + index}>{post.profile} - {post.desc}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
