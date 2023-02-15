import React from 'react';
import useGithubUser from './useGithubUser';

const GithubUser = ({username}) => {
  const {user, isLoading, isError, refetch} = useGithubUser(username)

  return (
    <div>     
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>An error has occurred</h3>}
      {user && <div>
        <h1>{user.name}</h1>
        <p>Username: {user.login}</p>
        <p>Bio: {user.bio}</p>
        <p>Location: {user.location}</p>
        <p>Followers: {user.followers}</p>
      </div>}
      
      <br />
      
      <button onClick={refetch}  className='bg-blue-500 text-white p-1.5 mr-1.5 self-start'>Refresh</button>

    </div>
  );
};

export default GithubUser;
