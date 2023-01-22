import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from './usersSlice'
import { v4 as uuidv4 } from 'uuid' 
import { nanoid } from '@reduxjs/toolkit'


const AddUser = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [values, setValues] = useState({
        firstName : '',
        email : ''
    })

    function handleAddUser(){
        setValues({name : '' , email:''})
        dispatch(addUser({
            email : values.email,
            firstName : values.firstName,
            id : nanoid()
            
            
        }))
        navigate('/')
    }

  return (
    <div  className='mt-10 max-w-xl mx-auto'>
     <div className='flex flex-col'>
        <label className='mb-2 text-base text-gray-800'>First Name</label>
        <input 
        className='bg-gray-200 py-2 px-3 border-2 outline-none'
        type="text" /* onChange={functionHere} */
        placeholder='Kidus Berhanu'
        values={values.firstName}
        onChange={(e) => setValues({ ...values , firstName: e.target.value})}

         />

        <label className='mb-2 text-base text-gray-800'>Email</label>
        <input 
        className='bg-gray-200 py-2 px-3 border-2 outline-none'
        type="email" /* onChange={functionHere} */
        placeholder='kidus.berhanu.gh9353@gmail.com'
        values={values.firstName}
        onChange={(e) => setValues({ ...values , email: e.target.value})}
         />
            <button onClick={handleAddUser} className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700" >Submit</button>
     </div>
    </div>
  )
}

export default AddUser