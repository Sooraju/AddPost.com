import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import autserobj from '../appwrite/auth'
import {login, logout} from '../store/auth.Slice'
import { useForm } from 'react-hook-form';
import Input from '../component/Input.jsx'
import Button from '../component/Button.jsx'
function Signup(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {register,handleSubmit}=useForm();
    const [error,setError]=useState("")
    const create=async(data)=>{
        setError("")
        try {
          console.log(data.email)
            const userdata=await autserobj.createaccount(data)
            console.log("chek if user account is created ",userdata)
            if(userdata){
              const logindata=await autserobj.loginaccount({email:data.email, password:data.password})
              if(logindata){
                const userdata=await autserobj.getcurrentstate()
                if(userdata)   dispatch(login(userdata))
                  console.log("check in signup to check getcurrentstate ",userdata)
                    navigate("/")
                  }
            }
        } catch (error) {
            setError(error)   
        }     
    }
    return(
       <div className='flex justify-center item-center w-full'>
               <div className=' w-full   max-w-lg bg-gray-200 border border-black/10'>
                                <div className='flex justify-center mb-2'>
                                            <span className=' inline-block w-full max-w-[100px]'>
                                             img
                                                        {/* <Logo width="100px"> */}
                                            </span>
                                </div>
                                <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to Your account</h2>
                                <p className=' mt-2 text-center text-base text-black/60'>Already have an account?&nbsp;
                                     <Link to="/signin" className="font-medium text-primary 
                                     transition-all duration-200
                                     hover:underline">Sign in
                                     </Link>
                                     </p>
                                     {error && <p className='text-red-600 mt-8 text-center'>
                                      {error.message || String(error)}</p>}
                                     <form onSubmit={handleSubmit(create)}>
                                       <div className='space-y-5'>
                                       <Input label="Full Name" placeholder="Enter your full Name" type="text"
                                     {...register("name",
                                       {
                                           required:true,
                                       }
                                     )}/>
                                     <Input type="email" placeholder='Enter your email'
                                     label="Email"
                                     {...register("email",{
                                       required:true,
                                       validate: {
                                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                    }
                                     }
                                     )} />
                                     <Input label="Password" placeholder="Password" type="password"
                                     {...register("password",
                                       {
                                           required:true,
                                       }
                                     )}/>
                                     <Button type="submit" className="w-full">Create Account</Button>
                                     </div>
                                     </form>
                                     
       
               </div>
             </div>
    )
}
export default Signup;