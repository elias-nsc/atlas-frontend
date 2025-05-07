import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOSTAPI || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export default api
