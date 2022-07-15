import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog'>
            <h2 className='text-center text-white'>My blogs</h2>
            <div>
                <h3 >1. Difference between authorization and authentication</h3>
                <p className='ms-4'>
                    Authentication and authorization are sound alike,
                    but each plays a different role in securing systems on your apps.
                    Authentication is a process that verifies that someone or 
                    something is who they say they are.And Authorization is the security process that determines a user or
                    service's level of access.
                </p>
                <h3>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
           <p className='ms-4'>
                We can easily build authentication and authorization systems in our 
                apps by using firebase.
           </p>
           <h3>3. What other services does firebase provide other than authentication</h3>
           <p className='ms-4'>
               In additon to authentication firebase provide us  app check,firestore database, realtime database, storage, hosting,cloud messaging.
           </p>
            </div>

        </div>
    );
};

export default Blogs;