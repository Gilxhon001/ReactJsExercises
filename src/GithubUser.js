import React, { useState, useEffect } from 'react';

const useGithubUser = (username) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });    
  }

  useEffect(() => {
    fetchData();
  }, [username]);

  return { fetchData, userData, error, loading };

}

const GithubUser = (props) => {

  const { fetchData, userData, error, loading } = useGithubUser(props.username)

  if (loading) {
    return <div>Loading...</div>;
  } 

  if (error) {
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
