import * as React from "react"
import {useEffect} from "react"
import axios from "axios";
import {useDispatch} from "react-redux";
import {getUsersRequest} from "../store/actions/userActions";

axios.defaults.withCredentials = true
axios.defaults.baseURL = "https://rem-rest-api.herokuapp.com/api"

// markup
const IndexPage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersRequest())
  }, [dispatch])

  return (
      <div>
        Hello
      </div>
  )
}

export default IndexPage
