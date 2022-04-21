import React from 'react'
import '../styling/Login.css'

const Login = ({ performLogin, onChange, loggedIn, performLogout, username }) => {
    return (
        <div className='loginpage'>
            <form className='loginform' onChange={onChange} >
        
            {!loggedIn ? (
                <div>
                    <h1>LOGIN</h1>
                    <input type="text" placeholder="User Name" id="username" />
                    <input type="password" placeholder="Password" id="password" />
                    <button onClick={performLogin}>Login</button>
                </div>
            ) : (
                <div>
                    <h2>You are logged in as { username }</h2>
                    <button onClick={performLogout}>Logout</button>
                </div>
            )}
            </form>
        </div>
    )
}

export default Login