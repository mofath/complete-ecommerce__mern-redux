import React from 'react';

import { useDispatch } from 'react-redux';
import { signupAction } from "../../../../../_store/modules/auth/actions";

import SignupForm from './signupForm'

import '../auth-form.css';

export default function Signup(props) {
    const { handleChange, handleSubmit, values, errors } = SignupForm(submit);

    const dispatch = useDispatch();

    async function submit(signupData) { await dispatch(signupAction(signupData)) }

    return (
        <form onSubmit={handleSubmit} className="auth-form" autoComplete="off" >
            <div >
                <p style={{ marginBottom: "7px" }}> New here? Create a free account! </p>

                {/* *************** usename input group **************  */}
                <div className='signup-input-group'>
                    <input type='text'
                        name='username'
                        value={values.username}
                        onChange={handleChange}
                        className={`signup-input ${errors.username && 'inputError'}`}
                        placeholder='Username'
                    />
                    {errors.username && <p className="error">{errors.username}</p>}

                </div>


                {/* *************** email input group **************  */}
                <div className='signup-input-group'>
                    <input type='text'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        className={`signup-input ${errors.email && 'inputError'}`}
                        placeholder='Email'
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>


                {/* *************** password input group **************  */}
                <div className='signup-input-group'>
                    <input type='password'
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        className={`signup-input ${errors.password && 'inputError'}`}
                        placeholder='Password'
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>


                {/* *************** submit button **************  */}
                <div className='' >
                    <input type='submit'
                        className='signup-btn'
                        value='Sign up'
                    />
                </div>

            </div>
        </form>
    )
}