import { UserContext } from "../context"
import { useState } from 'react'
import { User, Credential } from '../userType'
import { useLocalStorage } from '../hooks'
import { post, setToken } from '../http'
type UserProviderProps = {
    children: React.ReactNode
}

export default function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useLocalStorage<User | undefined>('user', undefined)
    if (user) {
        setToken(user.token)
    }

    const login = async (username: string, password: string) => {
        try {
            const user = await post<Credential, User>('/api/auth/login', {
                username,
                password
            })
            setUser(user)
            setToken(user.token)
            return true
        } catch (error) {
            if (error instanceof Error) {
                return error.message
            }
            return 'Unable to login, please try again'
        }
    }

    const register = async (username: string, password: string) => {
        try {
            const user = await post<Credential, User>('/api/auth/register', {
                username,
                password
            })
            setUser(user)
            setToken(user.token)
            return true
        } catch (error) {
            if (error instanceof Error) {
                return error.message
            }
            return 'Unable to register, please try again'
        }
    }

    const logout = () => {
        setUser(undefined)
        setToken('')
    }

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            {children}
        </UserContext.Provider>
    )
}