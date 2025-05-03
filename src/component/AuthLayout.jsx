import React,{useState,useEffect} from 'react'

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AuthLayout({children,authentication=true}){
    const navigate=useNavigate();
    const [Loader,setLoader]=useState(true);
    const authstatus=useSelector((state)=> state.authservice.status)
    useEffect(()=>{

    //   if (authentication && authstatus !== authentication) {
    //     navigate("/login");
    // } else if (!authentication && authstatus !== authentication) {
    //     navigate("/");
    // }
          if(authentication && authstatus== false){
            navigate('/login')
          }else if(!authentication&& authstatus==true){
            navigate('/')
          }
          setLoader(false)
    },[authstatus,authentication,navigate])
    return(
            Loader?  <h1>loading ...</h1>:<>{children}</>
    )
}
export default AuthLayout;