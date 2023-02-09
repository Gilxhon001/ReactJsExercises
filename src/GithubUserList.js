import React, { useState } from 'react';
import Container from './Container';
import GithubUser from './GithubUser';

const GithubUserList = () => {
    const [usernames, setUsernames] = useState([]);
    const [newUsername, setNewUsername] = useState('');

    const addUsername = (event) => {
        event.preventDefault();
        setUsernames([...usernames, newUsername]);
        setNewUsername('');
    };

    return (
        <div>
            <form onSubmit={addUsername}>
                <input className="border border-gray-400 p-2 mt-5" type="text" value={newUsername} onChange={event => setNewUsername(event.target.value)} />
                <button className="bg-blue-500 text-white p-2 mr-2" type="submit">Add username</button>
            </form>
            {usernames.map(username => (
                <Container tittle={username}>
                    <GithubUser key={username} username={username} />
                </Container>
            ))}
        </div>
    );
};

export default GithubUserList;
