import React from 'react';
import useSWR from 'swr';

const GithubUser = (props) => {
  const { data, error } = useSWR(`https://api.github.com/users/${props.username}`)

  return (
    <div>
      {!data && !error && <h3>Loading...</h3>}
      {error && <h3>An error has occurred</h3>}
      {data && !error && <div>
        <h1>{data.name}</h1>
        <p>Username: {data.login}</p>
        <p>Bio: {data.bio}</p>
        <p>Location: {data.location}</p>
        <p>Followers: {data.followers}</p>
      </div>}
    </div>
  );
};

export default GithubUser;
