"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';

export default function Login() {

    const [errorUsername, setErrorUsername] = useState<string>('')
    const [errorPassword, setErrorPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter();

    const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)

        const target = e.target as typeof e.target & { username: { value: string }; password: { value: string } };

        const response = await axios.post('/api/auth', {
            username: target.username.value,
            password: target.password.value
        })

        if (response.data.errors) {
            setErrorUsername(response.data.errors.username)
            setErrorPassword(response.data.errors.password)
        }

        if (response.data.status) {
            localStorage.setItem('auth', "true")
            router.push('/category')
        }

        setLoading(false)
    }


    return (
        <div className="container-login">
            <div className="logo">
                <img src="/logo.png" alt="logo" />
                <h1>Login</h1>
            </div>
            <form onSubmit={onLogin}>
                <div className="input-box">
                    <input type="text" name="username" required id="username" />
                    <label htmlFor="username">User Name</label>
                    <span className="input-error">{errorUsername}</span>
                </div>
                <div className="input-box">
                    <input type="password" name="password" required id="password" />
                    <label htmlFor="password">Password</label>
                    <span className="input-error">{errorPassword}</span>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" name="remember" />Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" className="btn-login" disabled={loading}>
                    {loading ?
                        <svg className="w-8 h-8 mr-3 animate-spin" viewBox="0 0 24 24"> <path className="fill-gray-200" d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                            <path className="fill-gray-800" d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                        </svg>
                        : "Login"}
                </button>
            </form>
        </div>
    )
}

