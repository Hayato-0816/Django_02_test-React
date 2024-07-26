import React, { useEffect, useState } from 'react';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/posts/')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div className="App">
            <h1>Blog Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <small>{post.created_at}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
