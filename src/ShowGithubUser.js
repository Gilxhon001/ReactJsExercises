import React from "react";
import GithubUser from "./GithubUser";
import Container from "./Container";
import { useParams } from "react-router";

const ShowGithubUser = () => {
    const { username  } = useParams()
    return <Container tittle="GitHub User"><GithubUser username={username} /></Container>;
};

export default ShowGithubUser; 