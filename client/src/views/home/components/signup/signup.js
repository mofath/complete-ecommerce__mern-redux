import React from 'react';
import './signup.css';
import AuthService from '../../../../services/authService'


import SignupForm from './signupForm'

export default function Signup(props) {
    const { handleChange, handleSubmit, values, errors } = SignupForm(submit);

    async function submit(values) {
        try {
            const response = await AuthService.signup(values);
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const { message } = jsonResponse;
            updatMessage(message)
        }
        catch (error) {
            console.log(error);
        }
    }

    function updatMessage(newValue) {
        // Here, we invoke the callback with the new value
        props.signupMessage(newValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='col-9'>
                <p> New here? Create a free account! </p>

                {/* *************** usename input **************  */}
                <div className='form-group input-element'>
                    <input type='text'
                        name='username'
                        value={values.username}
                        onChange={handleChange}
                        className={`form-control signup-input ${errors.username && 'inputError'}`}
                        placeholder='Username'
                    />
                    {errors.username && <small className="error">{errors.username}</small>}
                </div>


                {/* *************** email input **************  */}
                <div className='form-group input-element'>
                    <input type='text'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        className={`form-control signup-input ${errors.email && 'inputError'}`}
                        placeholder='Email'
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>


                {/* *************** password input **************  */}
                <div className='form-group input-element'>
                    <input type='password'
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        className={`form-control signup-input ${errors.password && 'inputError'}`}
                        placeholder='Password'
                    />
                    {errors.email && <p className="error">{errors.password}</p>}
                </div>


                {/* *************** submit button **************  */}
                <div className='form-group' >
                    <input type='submit'
                        name='' className='signup-btn'
                        value='Sign up'
                    />
                </div>

            </div>
        </form>
    )
}