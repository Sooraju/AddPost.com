import React from 'react'
import {Link}  from 'react-router-dom'
import serviceobj from '../appwrite/config.js'
function Post({$id,title,featuredimage}){
  console.log(" title ",title,"fratured Image",featuredimage,"id ",$id)
    return(
      <Link to={`/post/${$id}`}>
          <div className='w-full rounded-xl p-4'>
            <div className='w-full justify-center mb-2'>
                <img src={serviceobj.getfilepreview(featuredimage)} 
                className='rounded-xl'
                alt={title}/>
            </div>
            <h1 className='text-xl font-bold'>{title}</h1>
          </div>
          </Link>
    )
}
export default Post;