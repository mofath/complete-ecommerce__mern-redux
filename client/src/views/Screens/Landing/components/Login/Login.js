import React, { useEffect } from 'react';

import LoginForm from './loginForm'

import { withRouter } from "react-router";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from "../../../../../_store/modules/auth/actions";

import '../auth-form.css';

function Login(props) {
    const { handleChange, handleSubmit, values } = LoginForm(submit);

    const history = useHistory();
    const dispatch = useDispatch();

    const authReducer = useSelector(state => state.authReducer);
    const alertReducer = useSelector(state => state.alertReducer)

    const { isAuthenticated, isLoading } = authReducer;
    const { id } = alertReducer

    useEffect(() => {
        if (id === "LOGIN_REQUEST") {
            if (isAuthenticated && !isLoading) history.replace('/home')
        }
    }, [isAuthenticated]);


    async function submit(loginData) {
        await dispatch(loginAction(loginData))
    }

    return (
        <form onSubmit={handleSubmit} className="auth-form horizontal-layout" autoComplete="off" >

            <div className='vertical-layout'>
                <input type='text'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    className='login-input'
                    placeholder='Email'
                />
                <br />
                <span style={{ color: '#999999', fontSize: "13px" }}><input type='checkbox' />&nbsp;Remember me</span>
            </div>

            <div className='vertical-layout'>
                <input type='password'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    className='login-input'
                    placeholder='Password'
                />
                <br />
                <a href='/' style={{ color: '#999999', fontSize: "13px" }}>Forgot it?</a>
            </div>

            <div className=''>
                <input type="submit"
                    className={isLoading? "loading-btn" : "login-btn"} 
                    value={isLoading? "loading..." : "Sign In"}
                />
            </div>
        </form>
    )
}

export default withRouter(Login);