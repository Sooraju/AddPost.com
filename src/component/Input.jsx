import React,{useId} from 'react'
const Input=React.forwardRef(function Input({label,type="text",classname="",...props},ref){
    const id=useId();
    return(
        <div>
            {label && <label  htmlFor={id} className='inline-block mb-2 pl-1'>{label}</label>}
            <input  type={type} 
            className={` px-3 py-2  rounded-lg
             bg-white outline-none w-full border-gray-700 text-black ${classname}` }
              {...props}
            ref={ref}
            id={id}/>
            
        </div>
     
    )
})
export default Input;