import React from 'react';
import {Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const Login = () => {
    return (
        <div className='login'>
            <div className='form text-center'>
                <h3>Login</h3>
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
                    <div className='btn btn-primary fw-bold'>Log-In</div>
                    <div className='links'>
                        <Link to='/reset'>Reset Password</Link>
                    </div>
                    <p>-- or --</p>
                    <div className='btn btn-google fw-bold'>
                        <FontAwesomeIcon icon={faGoogle} className='me-2' />
                        Log-In with Google
                    </div>
                    <p className='text-capitalize notHave'>
                        don't have an account?
                        <span>
                            <Link to='/register' className='text-decoration-none text-dark fw-bold ms-1'>register</Link>
                        </span>
                    </p>

                </form>
            </div>
        </div>
    );
}

export default Login;