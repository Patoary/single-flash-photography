import React, { useRef } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';
import { async } from '@firebase/util';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, resetError] = useSendPasswordResetEmail(auth);
    const navigateRegister = event => {
        navigate('/register')
    }
    if (user) {
        navigate('/home');
    }
    if (signInError || resetError) {
        errorElement = <p className='text-danger'>{(signInError || resetError).message}</p>
    }
    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Please enter your email address');
        }

    }
    const handleSignin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='login-form'>
            <h3>Login</h3>
            <Form onSubmit={handleSignin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='submit-btn' variant="border-0 d-block mx-auto mb-2" type="submit">
                    Submit
                </Button>
                {errorElement}
            </Form>
            <p>If you are new? <span style={{ cursor: 'pointer' }} className='text-dark' onClick={navigateRegister}>Please Register</span></p>
            <p>Forgate Password ?<button className='btn btn-link text-dark text-decoration-none' onClick={handleResetPassword}> Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;