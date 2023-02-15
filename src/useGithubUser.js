import useSWR from 'swr';

const useGithubUser = (username) => {
  const { data, error } = useSWR(
    username ? `https://api.github.com/users/${username}` : null
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGithubUser ;