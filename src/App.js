import React from 'react';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import SearchPost from './components/SearchPost';

function App() {
    return (
        <div className="App">
            <h1>Post Management System</h1>
            <AddPost />
            <SearchPost />
            <PostList />
        </div>
    );
}

export default App;
