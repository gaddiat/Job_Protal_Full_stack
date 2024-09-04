import React, { useState } from 'react';
import { searchPosts } from '/Users/amitgaddi/Documents/Learning/React/post-app/src/services/PostService.js';

const SearchPost = () => {
    const [text, setText] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        console.log("Text value before search:", text); // Log text value
        searchPosts(text).then(response => {
            console.log("Search results:", response.data); // Log search results
            setResults(response.data);
        }).catch(error => {
            console.error("Search error:", error); // Log any errors
        });
    };

    return (
        <div>
            <input 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Search text" 
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {results.map((post, index) => (
                    <li key={index}>{post.profile} - {post.desc}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchPost;
