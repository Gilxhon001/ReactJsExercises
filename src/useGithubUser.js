import useSWR from 'swr';

const useGithubUser = (username) => {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    refetch: mutate,
  };
};

export default useGithubUser ;