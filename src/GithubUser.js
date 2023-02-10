import React, { useState, useEffect } from 'react';

const useGithubUser = (username) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, [username]);

  return [userData, loading]

}

const GithubUser = (props) => {

  const [userData, loading] = useGithubUser(props.username)

  if (loading) {
    return <div>Loading...</div>;
  } 

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>Username: {userData.login}</p>
      <p>Bio: {userData.bio}</p>
      <p>Location: {userData.location}</p>
      <p>Followers: {userData.followers}</p>
    </div>
  );
};

export default GithubUser;
