import { useState, useEffect } from 'react'

const initialState = {
    email: '',
    password: ''
}

const validate = (values) => {
    let errors = {};
    const mailRegex = /(.+)@(.+){2,}\.(.+){2,}/;

    if (!values.email) {
        errors.email = 'Email is Required'
    }
    //  else if (mailRegex.test(values.email)) {
    //     errors.email = 'Invalid eamil foramt'
    // }

    if (!values.password) {
        errors.password = 'Password is Required'
    } else if (values.password.length < 3) {
        errors.password = 'Password must be more than 3 characters'
    }

    return errors;
}


const LoginForm = (callback) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(values))
        setIsSubmitting(true);
    }

    const resetForm = () => {
        setValues(initialState)
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(values);
        }
    }, [errors]);


    return {
        handleChange,
        handleSubmit,
        resetForm,
        values,
        errors,
    }
}

export default LoginForm;