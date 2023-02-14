import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Container from "./Container";
import { Welcome } from "./Welcome";
import Counter from "./Counter";
import GithubUserList from "./GithubUserList";
import GithubUser from "./GithubUser";


  

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Container tittle="Welcome">
                    <Welcome />
                </Container>} />

                <Route path="/counter" element={<Container tittle="Counter">
                    <Counter />
                </Container>} />

                <Route exact path="/users" element={<Container tittle="Github Users">
                    <GithubUserList />
                </Container>} />

                <Route path="/users/:username" element={<Container tittle="Github User:">
                    <GithubUser />
                </Container>} />

                <Route path="*" element={<Container tittle="Not Found" />} />
            </Routes>

            <br />

            <div className="flex justify-center">
                <Link className='bg-blue-500 text-white p-2 mr-2' to="/">Welcome</Link>
                <Link className='bg-blue-500 text-white p-2 mr-2' to="/counter">Counter</Link>
                <Link className='bg-blue-500 text-white p-2 mr-2' to="/users">Add Users</Link>
            </div>
        </>


    )
}

export default App;