import React from 'react'
import  autserobj from'../appwrite/auth.js'
import {logout} from '../store/auth.Slice.js'
import {  useDispatch }  from'react-redux'

function Logout(){
    const dispatcher=useDispatch()
    const handelclick=()=>{
        autserobj.logout()
        .then(
            ()=>{
             dispatcher(logout())
            }
        )
    }
    return(
        <button className='inline-block duration-200 hover:bg-blue-100 rounded-full px-6 py-2'
        onClick={handelclick}>Logout</button>
    )
}
export default Logout;