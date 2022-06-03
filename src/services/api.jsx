import axios from 'axios'

const url = '/api'

const http = axios.create({
  baseURL: url,
})
export default http
