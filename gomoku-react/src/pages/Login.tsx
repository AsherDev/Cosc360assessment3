import { Button, Input, Message } from '../components/Index'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context'

import style from './Login.module.css'

export default function Login() {
    const { login } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isCredentialInvalid, setIsCredentialInvalid] = useState(false)
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')


    const handleLogin = async () => {
        setErrorMessage('')
        const result = await login(username, password)
        if (result === true) {
            navigate('/')
        } else {
            setErrorMessage(result)
        }
    }

    return (
        <form className={style.container} onSubmit={(e) => {
            e.preventDefault()
            handleLogin()
        }}
        >
            {errorMessage &&
                (<Message variant="error" message={errorMessage} />)}
            <Input
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                    setErrorMessage('')
                    setUsername(e.target.value)
                }}
            />
            <Input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                    setErrorMessage('')
                    setPassword(e.target.value)
                }}

            />
            <Button type="submit">Login</Button>
        </form>
    )
}