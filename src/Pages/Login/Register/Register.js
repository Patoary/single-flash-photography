import React,{useRef} from 'react';
import {Form,Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigateLogin = event =>{
        navigate('/login')
    }
    const handleRegister = (event) =>{
        event.preventDefault();
        // const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email,password)

        console.log('hi')
        navigate('/home')

        
    }

    return (
        <div className='login-form'>
        <h3>Please Register</h3>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control ref={nameRef} type="text" placeholder="Your Name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control ref={emailRef} type="email" placeholder="Your Email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className='submit-btn' variant="border-0 d-block mx-auto mb-2" type="submit">
                Submit
            </Button>
        </Form>
        <p>You have na account? <span style={{ cursor: 'pointer' }} className='text-dark' onClick={navigateLogin}>Please Login</span></p>
        <SocialLogin></SocialLogin>
    </div>
);

};

export default Register;