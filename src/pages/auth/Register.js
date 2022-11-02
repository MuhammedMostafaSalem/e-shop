import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login register'>
            <div className='form text-center'>
                <h3>Register</h3>
                <form>

                    <Form.Control
                        type='text'
                        placeholder="Email"
                        className='formControl'
                    />
                    <Form.Control
                        type='password'
                        placeholder="Password"
                        className='formControl'
                    />
                    <Form.Control
                        type='password'
                        placeholder="Confirm Password"
                        className='formControl'
                    />
                    <div className='btn btn-primary fw-bold'>Register</div>
                    <p className='text-capitalize notHave'>
                        already an account?
                        <span>
                            <Link to='/login' className='text-decoration-none text-dark fw-bold ms-1'>log-In</Link>
                        </span>
                    </p>

                </form>
            </div>
        </div>
    );
}

export default Register;