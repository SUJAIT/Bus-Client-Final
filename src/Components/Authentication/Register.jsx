import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import { AuthContext } from './ContextApi/AuthProvider'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

const Register = () => {
// normal way  start
  // const {createUser} = useContext(AuthContext)
  // const navigate = useNavigate()
  // const location = useLocation()
  // const from = location.state?.from?.pathname||'/';

  // user create function 
  // const userCreateHandler = event =>{
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const user = {email,password,name}
  //   console.log(user)

    // firbase api call 
    // createUser(email,password)
    // .then((userCredential) =>{
    //   //signin
    //   const user = userCredential.user;
    //   //
    //   console.log(user)
    //   form.reset()
    //   navigate(navigate(from,{replace:true}))
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.log(errorCode,errorMessage)
    //   // ..
    // });}
          //  firbase working End
  
// normal way  end
const navigate = useNavigate();
//react hook
const { register, handleSubmit, reset, formState: {errors},} = useForm()

const {createUser, updateUserProfile}  = useContext(AuthContext)

const onSubmit = (data)=>{
  //firbase api
  createUser(data.email, data.password)
  .then(result =>{
    const loggedUser = result.user;
    console.log(loggedUser)
    updateUserProfile(data.name, data.photoURL)
    .then(() =>{
      //data base user Information sending process start 
      const saveUser = {name:data.name, email:data.email, img:data.photoURL,phoneNumber:data.number}
fetch("http://localhost:5000/users",{
  method:"POST",
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(saveUser)// saveUser Object send
})
.then(res =>res.json())
.then(data =>{
  if(data.insertedId){
    reset()
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Your Profile Create Succesfully',
      showConfirmButton: false,
      timer: 1500
    });
    navigate("/")
  }
})
    })
    .catch(errors => console.log(errors))
  })
}
//react hook end


  return (
    <div>
 
     <div className="w2 regParent">
     <div className='regLogo'>
     <img className='logo' src="https://i.ibb.co.com/k1Dgx1Z/Screenshot-2024-12-29-232050-removebg-preview.png" alt="" />
    </div>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <div>
  <p className='mt-4 text-2xl font-semibold'>Register in to Jabo</p>
</div>

      <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User</span>
          </label>
          <input type="name"  {...register("name", { required: true })} placeholder="User Name" className="input input-bordered" required />
         {errors.name && <span className="text-red-600">This field is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="number"   {...register("number", { required: true })} placeholder="User Name" className="input input-bordered" required />
          {errors.number && <span className="text-red-600">This field is required</span>}
        </div>

    

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  {...register("email", { required: true })} type="email" name='email' placeholder="email" className="input input-bordered" required />
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  {...register("password", {
                required: true,
  minLength:8,
  pattern : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,

              })} placeholder="password" className="input input-bordered" required />
              {/* Password1! */}
              {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 required</span>}
             
              {errors.password?.type === 'pattern' && <span className="text-red-600">At least one lowercase letter (a-z),At least one uppercase letter (A-Z),At least one digit (0-9),At least one special character from the set [@, $, !, %, *, ?, &],Minimum length of 6 characters</span>}
             
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-error aab" type="submit" value="Sign-in"/>
        </div>
     <span className='text-lg font-semibold'><span className='fontColor mr-2'>Already have an account?</span><Link className='text-sky-500' to={'/login'}>Login</Link></span>   
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Register
