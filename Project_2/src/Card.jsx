import React, { useState } from 'react'


function Card({id,text,handleRemove}) {
    const [status, setStatus] = useState(false)
    
    function updateStatus(){
      setStatus(!status)
     }
   
  return (
    <div className='bg-gray-700  rounded-lg text-white flex flex-col justify-center flex-wrap p-5 mt-9'>
     <h3 className='text-[15px] font-bold mb-4 leading-6'>{id+1}. {text}</h3>
     <p className='mb-5 font-semibold leading-6'>Status: {status ? 'Completed' : 'Pending'} </p>
     <button className='pt-1 pb-1 pl-8 pr-8  rounded-lg font-semibold bg-blue-700 mb-3' onClick={updateStatus}>Update Status</button>
     <button className='pt-1 pb-1 pl-8 pr-8  rounded-lg font-semibold bg-blue-700' onClick={() => handleRemove(id)}>Remove</button>
    </div>
  )
}

export default Card
