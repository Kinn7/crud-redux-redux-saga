import UsersList from './app/features/users/UsersList'
import { Routes, Route } from 'react-router-dom'
import AddUser from './app/features/users/AddUser'
import EditUser from './app/features/users/EditUser'
import {  useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getUsersFetch } from './app/features/users/usersSlice'

function App() {
  // const users = useSelector(state => state.users.users)
  // const dispatch = useDispatch()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsersFetch())
  },[])
  return (
    <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
      <h1 className='text-center font-bold text-2xl text-gray-700'>CRUD with redux toolkit and redux saga</h1>
      <Routes>
        <Route path='/' element={<UsersList />} />
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/edit-user/:id' element={<EditUser />} />
      </Routes>
    </div>
  )
}

export default App
