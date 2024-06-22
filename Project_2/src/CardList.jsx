import React, { useState } from 'react'
import Card from './Card'
function CardList() {
    const[task, setTask] = useState([])
    const[value,setValue] = useState('')

    function hnadleInputChange(e){
       setValue(e.target.value)
       console.log("Value=>",e.target.value);
    }

   function handelClick(){
     
      setTask([...task,value])
      setValue('')
      console.log(task);
   }

   function handleRemove(id) {
     setTask(task.filter((_, index) => index !== id));
    }
 
  return (
    <div className='bg-purple-900 p-5 m-8 rounded-3xl flex flex-col items-center'>
     {/* Input and add button */}
    <div className='flex items-center justify-center mt-11 bg-white border-2 rounded-lg p-4'>
    <input type="text" value={value} placeholder='Enter value'required className='p-2 m-4 rounded-lg'onChange={hnadleInputChange}/>
    <button className='px-11 py-2 bg-purple-700 text-white rounded-lg mr-3 font-semibold' onClick={handelClick} >Add</button>
    </div>
    {/* Card */}

    <ul className='flex gap-5 flex-wrap items-center justify-center'>
      {task.map((value, id) => (
        <li key={id}>
        <Card id = {id} text={value} handleRemove={handleRemove} />
        </li>
       ))}
     </ul>
    </div>
  )
}

export default CardList
