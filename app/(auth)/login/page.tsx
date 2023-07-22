
export default function Login() {


    return (
        <div className="container-login">
            <div className="logo">
                <img src="/logo.png" alt="logo" />
                <h1>Login</h1>
            </div>
            <form action="/api/login" method="POST">
                <div className="input-box">
                    <input type="text" name="username" required id="username" />
                    <label htmlFor="username">User Name</label>
                    <span className="input-error"></span>
                </div>
                <div className="input-box">
                    <input type="password" name="password" required id="password" />
                    <label htmlFor="password">Password</label>
                    <span className="input-error"></span>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

