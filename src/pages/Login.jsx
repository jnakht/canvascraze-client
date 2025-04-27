import React from 'react';
import { authContextHook } from '../utility/AuthHooks';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {userLogin} = authContextHook();
    const location = useLocation();
    console.log('this is the location in the login page: ', location);
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = {email, password};
        console.log(user);

        // login user with email and password
        userLogin(email, password)
        .then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error);
        })
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogin}>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </div>
                </form>
                <p className='text-center'>New Here? Please <Link to='/register' className="text-bold text-blue-400 ">Register</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Login;