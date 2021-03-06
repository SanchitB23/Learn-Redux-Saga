import axios from "axios";

export function deleteUser(userId) {
  return axios.delete(`/users/${userId}`)
}


export const createUser = ({firstName, lastName}) => {
  return axios.post('/users', {
    firstName, lastName
  })
}


export const getUsers = () => {
  return axios.get('/users', {
    params: {
      limit: 1000
    }
  })
}
