import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL
const url = import.meta.env.MODE!=='development' ? `${apiUrl}` : '/api'
const http = axios.create({
  baseURL: url,
})
export default http
