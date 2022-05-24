import React from 'react';
import useForm from './useForm';
import './Form.css';

const validate = (values) => {
    let errors = {};

    console.log(values);
    if (!values.name) {
        errors.name = 'Name is required!';
    } 
    
    if (!values.email) {
        errors.email = 'Email is required!';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email is invalid!';
    }

    if (!values.password) {
        errors.password = 'Password is required!';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be 8 or more characters.';
    }

    return errors;
}

const Form = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const { values, errors, handleChange, handleSubmit } = useForm(initialValues, login, validate);

    function login() {
        alert('Form submitted!');
    }

    return (
        <div className='form-container'>
            <h1>Form Validation</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor='name'>Name:</label>
                <div className='field-name'>
                    <input type='text' name='name' placeholder='Enter name' value={values.name} onChange={handleChange} />
                </div>
                {errors.name && (
                    <p className='error'>{errors.name}</p>
                )}

                <label htmlFor='email'>Email:</label>
                <div className='field-email'>
                    <input type='email' name='email' placeholder='Enter password' value={values.email} onChange={handleChange} />
                </div>
                {errors.email && (
                    <p className='error'>{errors.email}</p>
                )}

                <label htmlFor='password'>Password:</label>
                <div className='field-password'>
                    <input type='password' name='password' placeholder='Enter password' value={values.password} onChange={handleChange} />
                </div>
                {errors.password && (
                    <p className='error'>{errors.password}</p>
                )}

                <div className='submit-btn'>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;