import * as React from "react"
import axios from "axios";

axios.defaults.withCredentials = true
axios.defaults.baseURL = "https://rem-rest-api.herokuapp.com/api"

// markup
const IndexPage = () => {
  return (
      <div>
        Hello
      </div>
  )
}

export default IndexPage
