import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import autserobj from '../appwrite/auth.js';
import {useDispatch} from 'react-redux';
import {login as authlogin} from '../store/auth.Slice.js'
import {useForm} from 'react-hook-form'
import Input from '../component/Input.jsx'
import Button from '../component/Button.jsx'
function Login(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [error,setError]=useState()
    const {register,handleSubmit}=useForm();
    const login=async(data)=>{
        setError("")
        try {
          console.log(`Password :${data.password}`)
            const session=await autserobj.loginaccount(data);
            if(session){
                const userdata=await autserobj.getcurrentstate();
                if(userdata) dispatch(authlogin(userdata))
                    navigate("/")
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
                         <p className=' mt-2 text-center text-base text-black/60'>Don't have any account?&nbsp;
                              <Link to="/signup" className="font-medium text-primary 
                              transition-all duration-200
                              hover:underline">Sign Up
                              </Link>
                              </p>
                              {error && (
                                  <p className='text-red-600 mt-8 text-center'>
                                                   {error.message || String(error)}
                                                      </p>
                                                                            )}
                              <form onSubmit={handleSubmit(login)}>
                                <div className=' space-y-5'>
                              <Input type="email" placeholder='Enter your email'
                              label="Email" {...register("email",{
                                required:true,
                                matchPatern:(value)=>/^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.
                                test(value)||"Email Address must be the valid address",
                              }
                              )} />
                              <Input label="Password" placeholder="Password" type="password"
                              {...register("password",
                                {
                                    required:true,
                                }
                              )}/>
                              <Button type="submit" className="w-full" children="Submit"></Button>
                              </div>
                              </form>
                              

        </div>
      </div>
    )
}
export default Login;