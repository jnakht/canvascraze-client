import { useEffect } from "react";
import { authContextHook } from "../utility/AuthHooks";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const {createUser, user} = authContextHook();
    const navigate = useNavigate();
    
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        const user = {name, email, photoURL, password};
        console.log(user);

        // password validation
        if (password.length < 6) {
            toast.error("Password Must Be At Least 6 Characters Long");
            return;
        }
        if (!/^(?=.*[A-Z]).+$/.test(password)) {
            toast.error("Password Must Contain At Least One Uppercase Letter");
            return;
        }
        if (!/^(?=.*[a-z]).+$/.test(password)) {
            toast.error("Password Must Contain one Lowercase Letter");
            return;
        }

        // create user with email and password
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            navigate('/');
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister}>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Photo URL</label>
                            <input type="text" name='photoURL' className="input" placeholder="Photo URL" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </div>
                    </form>
                    <p className="text-center">Already have an account? Please <Link to='/login' className="text-bold text-blue-400 ">Login</Link></p>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Register;