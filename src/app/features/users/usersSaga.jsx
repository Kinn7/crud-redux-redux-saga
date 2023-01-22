import {call , put , takeEvery } from 'redux-saga/effects'
/*call calls our urls and apis , put will alow us to call our actions, takeEvery is going to be able to w
atch a function or watch an action and triggers our function whenever that action is being called*/
import { getUsersSuccess } from './usersSlice'

function* workGetUsersFetch(){
    const users = yield call(() => fetch('https://mockend.com/Kinn7/mockend-rest-api/User'))
    const formattedUsers = yield users.json()
    const formattedUsersShortened = formattedUsers.slice(0,10)
    yield put(getUsersSuccess(formattedUsers))
}

function* userSaga(){
    yield takeEvery('users/getUsersFetch', workGetUsersFetch)
}

export default userSaga