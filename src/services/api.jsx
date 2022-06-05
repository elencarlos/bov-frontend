import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL
const url = apiUrl ? ${apiUrl}+'/api' : '/api'

const http = axios.create({
  baseURL: url,
})
export default http
