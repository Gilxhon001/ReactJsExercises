import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("") ;
    const [password, setPassword] = useState("") ;
    const [remember, setRemember] = useState(false) ;

    const handleInputChange = (event) => {
        const type = event.target.type;
        const value = event.target.value; 
        const checked = event.target.checked;        

        if (type === "password"){
            setUsername(value)
        }

        if (type === "name"){
            setPassword(value)
        }

        if (type === "remember"){
            setRemember(checked)
        }

    }

    const onLogin = () => {
        console.log({username, password, remember })
        console.log("Submitted")
    }

    return (
                    <div>
                        <input
                            name="name"
                            onChange={handleInputChange}
                            value={username}
                        />
        
                        <input
                            name="password"
                            type="password"
                            onChange={handleInputChange}
                            value={password}
                        />
        
                        <br/>
        
                        <input
                            name="remember"
                            type="checkbox"
                            checked={remember}
                            onChange={handleInputChange}
                        />
        
                        <br/>
                        
                        <button 
                            disabled={!username || !password}  
                            onClick={onLogin} 
                            
                        >
        
                        Log In
        
                        </button>
        
                    </div>
                )
}

export default Login ;
// export default class Login extends React.Component {

//     //input 
//     state = {
//         name: '',
//         password: '',
//         remember: false,
//     }

//     handleInputChange = (event) => {
//         const name = event.target.name;
//         const type = event.target.type;
//         const value = event.target.value; 
//         const checked = event.target.checked;

//         this.setState(
//             { 
//                 [name]: type === 'checkbox' ? checked : value,
//             }
//         )
//     }

//     onLogin = () => {
//         this.props.submitted()
//         console.log(this.state)
//         console.log("Submitted")
//     }

//     render() {
//         return (
//             <div>
//                 <input
//                     name="name"
//                     onChange={this.handleInputChange}
//                     value={this.state.value}
//                 />

//                 <input
//                     name="password"
//                     type="password"
//                     onChange={this.handleInputChange}
//                     value={this.state.value}
//                 />

//                 <br/>

//                 <input
//                     name="remember"
//                     type="checkbox"
//                     checked={this.state.remember}
//                     onChange={this.handleInputChange}
//                 />

//                 <br/>
                
//                 <button 
//                     disabled={!this.state.name || !this.state.password }  
//                     onClick={this.onLogin} 
                    
//                 >

//                 Log In

//                 </button>

//             </div>
//         )
//     }
// }