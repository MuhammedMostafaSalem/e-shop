import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Reset = () => {
    return (
        <div className='login reset'>
            <div className='form text-center'>
                <h3>Reset Password</h3>
                <form>

                    <Form.Control
                        type='text'
                        placeholder="Email"
                        className='formControl'
                    />

                    <div className='btn btn-primary fw-bold'>Reset Password</div>

                    <p className='text-capitalize d-flex justify-content-between pLinks'>
                        <Link to='/login' className='text-decoration-none text-dark fw-bold ms-1'>- logIn</Link>
                        <Link to='/register' className='text-decoration-none text-dark fw-bold ms-1'>- register</Link>
                    </p>

                </form>
            </div>
        </div>
    );
}

export default Reset;