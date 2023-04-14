import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase_int';


const LogeIn = () => {
    const [user, setUser]=useState(null)
   const auth =getAuth(app)
    console.log(app);
    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn=()=>{
        signInWithPopup(auth, provider)
      .then(result=>{
        const logeInUser =result.user;
        console.log(logeInUser);
        setUser(logeInUser)
      })
      .catch(error=>{
        console.log('error', error);
      })
    }
    const handleGoogleLogOut=()=>{
        signOut(auth)
        .then(result=>{
            console.log(result);
            setUser(null)
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
           {
            user ? 
             <div>
                <button onClick={handleGoogleLogOut}>LogOut</button>
            </div> : 
            <div>
                <button onClick={handleGoogleSignIn}>Login</button>
            </div>
           }
           {user && <div>
            <img src={user.photoURL} alt="" />
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
            </div>}
        </div>
    );
};

export default LogeIn;