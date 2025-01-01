import React, { useContext } from 'react'
import  { AuthContext } from '../ContextApi/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';

const GooglePopUp = () => {

    const  {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathName || "/";

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            //Data base user Information Sending Process Start 
            const saveUser = {
                name: loggedInUser.displayName, email: loggedInUser.email, img: loggedInUser.photoURL
            }
            console.log(saveUser)
        })
    .then(result =>{
        const user = result.user
        console.log(user)
        navigate(from,{replace: true});
    })
        
        // .then(res => res.json())
        // .then(() => {
        //     navigate(from,{replace: true});
        // })
    }

  return (
    <div>
          <div>
            <div className='divider'></div>
            <div className='w-full text-center my-4'>
                <button onClick={handleGoogleSignIn} className="btn btn-wide">
                    <FcGoogle></FcGoogle>
                </button>
            </div>

        </div>
    </div>
  )
}

export default GooglePopUp
