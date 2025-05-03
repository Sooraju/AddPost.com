import React,{forwardRef, useId} from 'react'
function Select({options,label,classname="",...props},ref){
    const id=useId()
    return(<div className='w-full'>
           {label && <label htmlFor={id}></label>}
           <select
           {...props}
           ref={ref}
           className={`px-3 py-2 outline-none bg-white text-black rounded-lg
            border-gray-600 focus:border-gray-50 duration-200 w-full`}>
                {options?.map((oPtion)=>(
                    <option  value={oPtion} Key={id}>
                        {oPtion}
                    </option>
                ))}
           </select>
    </div>)
             
}
export default forwardRef(Select)