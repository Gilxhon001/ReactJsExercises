import React from "react";
import GithubUser from "./GithubUser";
import Container from "./Container";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ShowGithubUser = () => {
    const { username } = useParams()
    return <Container tittle="GitHub User">

        <div className=' flex flex-row justify-between' >
            <GithubUser username={username} />
            <Link className='bg-blue-500 text-white p-1.5 mr-1.5 self-start' to="/users">Go Back</Link>
        </div>

    </Container>;
};

export default ShowGithubUser; 