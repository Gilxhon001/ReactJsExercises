import React, { useState } from "react";

const useCredentials = () => {

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [remember, setRemember] = useState(false);

    const handleUsername = (event) => setUsername(event.target.value);

    const handlePassword = (event) => setPassword(event.target.value);

    const handleRemember = (event) => setRemember(event.target.checked);

    return [username, password, remember, handleUsername, handlePassword, handleRemember]
}

const Login = () => {

    const [username, password, remember, handleUsername, handlePassword, handleRemember] = useCredentials();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ username, password, remember })
        console.log("Submitted")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                onChange={handleUsername}
                value={username}
            />

            <input
                name="password"
                type="password"
                onChange={handlePassword}
                value={password}
            />

            <br />

            <input
                name="remember"
                type="checkbox"
                checked={remember}
                onChange={handleRemember}
            />

            <br />

            <input type="submit" value="Submit" disabled={!username || !password} />

        </form>
    )
}

export default Login;
