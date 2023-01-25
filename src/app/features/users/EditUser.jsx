import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUser, usersAll } from "./usersSlice"

function EditUser() {
    const params = useParams()
    const id = params.id
    const dispatch = useDispatch()
    console.log(typeof(params.id) )

    const users = useSelector(usersAll)
    const navigate = useNavigate()
    const existingUser = users.filter(user => user.id.toString() === id.toString() )
    console.log(existingUser)
     // const {email , firstName } = existingUser[0]
    

    const [values, setValues] = useState({
        firstName : existingUser.length > 0 ? existingUser[0].firstName  : "",
        email :  existingUser.length > 0 ? existingUser[0].email  : "",
    })
   


    function handleEditUser(){
        setValues({firstName : ''  , email: ''})
        dispatch(editUser({
            id: params.id,
            firstName: values.firstName,
            email: values.email
          }));
        navigate('/')
    }

    const editUsers = () => (
        <div className='flex flex-col'>
        <label className='mb-2 text-base text-gray-800'>First Name</label>
        <input 
        className='bg-gray-200 py-2 px-3 border-2 outline-none'
        type="text" /* onChange={functionHere} */
        placeholder='Kidus'
        value={values.firstName}
          onChange={(e) => setValues({ ...values , firstName: e.target.value})}

         />

        <label className='mb-2 text-base text-gray-800'>Email</label>
        <input 
        className='bg-gray-200 py-2 px-3 border-2 outline-none'
        type="email" /* onChange={functionHere} */
        placeholder='kidus.berhanu.gh9353@gmail.com'
        value={values.email}
        onChange={(e) => setValues({ ...values , email: e.target.value})}
         />
            <button onClick={handleEditUser} className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700" >Edit</button>
     </div>
    )

  return (
    <div  className='mt-10 max-w-xl mx-auto'>
        {/* {users.length   ? editUsers() : <p>Loading</p>} */}
        {editUsers()}
    </div>
  )
}

export default EditUser