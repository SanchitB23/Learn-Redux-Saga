import * as React from "react"
import {useEffect} from "react"
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {createUserRequest, deleteUserRequest, getUsersRequest} from "../store/actions/userActions";
import UsersList from "../components/UsersList";
import NewUserForm from "../components/newUserForm";

import('./style.css')

axios.defaults.withCredentials = true
axios.defaults.baseURL = "https://rem-rest-api.herokuapp.com/api"

// markup
const IndexPage = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsersRequest())
  }, [dispatch])


  const handleOnSubmit = ({firstName, lastName}) => {
    dispatch(createUserRequest({
      firstName, lastName
    }))
  }

  const handleOnDeleteUser = (userId) => {
    dispatch(deleteUserRequest(userId))
  }

  if (users.items.length < 0) return

  return (
      <div className="page-container">
        <NewUserForm onSubmit={handleOnSubmit}/>
        <UsersList users={users.items} onDeleteUser={handleOnDeleteUser}/>
      </div>
  )
}

export default IndexPage
