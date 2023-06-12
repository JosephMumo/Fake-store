import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import './styles/Login.css'

function Login() {

    const { loginData } = useContext(CartContext)
    const { isLogged, setIsLogged } = useContext(CartContext)
    const [ userInfo, setUserInfo ] = useState({
        username: '',
        password: ''
    })

    function handleChange(event) {
        const { name, value } = event.target
        setUserInfo( prevInfo => {
            return { ...prevInfo,
            [name] : value
        }
        })
        console.log(userInfo)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if ( userInfo.username === loginData.username && userInfo.password === loginData.password) {
            setIsLogged(true)
        } else{
            setIsLogged(false)
        }
        console.log(isLogged)
        
    }

    return (
        <div className='login-box'>
            <h1>Welcome to Tubuy</h1>
            <form onSubmit={handleSubmit}>
                <h2>Login to Proceed</h2>
                <input type='text' id='username' name='username' placeholder='username' onChange={handleChange} required></input>
                <input type='password' id='password' name='password' placeholder='password' onChange={handleChange} required></input>
                <button>Login</button>
                <p>Username : Admin</p>
                <p>Password : Admin123</p>
            </form>
        </div>
    )
}
export default Login;