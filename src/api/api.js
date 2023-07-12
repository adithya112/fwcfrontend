import axios from 'axios'

export const BASE_API_URL =
    process.env.NODE_ENV === 'production'
        ? 'https://wastemanagementb.onrender.com'
        : 'http://localhost:8000/api/users'

axios.defaults.headers.common['authorization'] = localStorage.getItem('token')

export default axios
