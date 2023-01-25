import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users : [],
    isLoading : false
    
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers : {
        getUsersFetch : (state) => {
            state.isLoading = true
        },
        getUsersSuccess : (state,action) => {
            state.users = action.payload
            state.isLoading = false
        },
        getUsersFailure : (state) => {
            state.isLoading = false
        },
        addUser : (state,action) => {
            state.users.push(action.payload)
        },
        editUser : (state,action) => {
            const { email, firstName, id } = action.payload;
           // const uid = parseInt(id)
            let uid = id.toString()
 

           
            const existingUser = state.users.find(user => user.id.toString() === uid);
            if(existingUser) {
              existingUser.firstName = firstName;
              existingUser.email = email;
            }
            state.isLoading = false
        },
        deleteUser : (state, action) => {
            const {id} = action.payload
           const existingUser  = state.users.find(user => user.id === id)
           if(existingUser){
            const filteredUser = state.users.filter(user => user.id !== id)
            state.users = filteredUser
           }
           

            //  if(existingUser)
            //  {
            //     return state.users
            // }

        }
    }


}) 

export const { getUsersFetch, getUsersSuccess, getUsersFailure, addUser, editUser, deleteUser } = usersSlice.actions

export const  usersAll  = (state) => state.users.users

export default usersSlice.reducer;