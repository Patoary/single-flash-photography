import React from 'react';
import goole from '../../../images/googleIcon.png';
import github from '../../../images/github.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, googleLoginUser, loading, googleLoginError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    
    if(googleLoginError){
        errorElement= <p>Error: {googleLoginError?.message}</p>
    }
    
    if(googleLoginUser){
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='w-50 bg-dark'></div>
                <p className='px-2 m-2'>or</p>
                <div style={{height:'1px'}} className='w-50 bg-dark'></div>
            </div>
        {errorElement}
            <div>
                <button onClick={()=> signInWithGoogle()} className='submit-btn w-50 d-block mx-auto p-1 rounded mb-2'>
                    <img style={{width:'20px'}} src={goole} alt="" />
                    <span className='ms-1'>Google Sign In</span>
                </button>
                <button className='submit-btn w-50 d-block mx-auto p-1 rounded' >
                    <img style={{width:'20px'}} src={github} alt="" />
                    <span className='ms-1'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;