import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

const GithubUserList = () => {
    const [usernames, setUsernames] = useState(
        JSON.parse(localStorage.getItem('usernames')) || []
    );

    const [newUsername, setNewUsername] = useState('');

    const addUsername = (event) => {
        event.preventDefault();
        setUsernames([newUsername, ...usernames]);
        setNewUsername('');
        localStorage.setItem('usernames', JSON.stringify([newUsername, ...usernames]));
    };


    return (
        <div>
            <form onSubmit={addUsername}>
                <input className="border border-gray-400 p-2 mt-5" type="text" value={newUsername} onChange={event => setNewUsername(event.target.value)} />
                <button
                    className="bg-blue-500 text-white p-2 mr-2"
                    type="submit"
                    >Add username</button>
            </form>
            {usernames.map(username => (
                <Link to={`/users/${username}`}>
                    <Container tittle={username} key={username} />
                </Link>
            ))}


        </div>
    );
};

export default GithubUserList;
