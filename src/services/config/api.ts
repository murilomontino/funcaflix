import axios from 'axios'
// Pode ser algum servidor executando localmente:
// http://localhost:3000

export const path = process.env.API_URL

const api = axios.create({
  baseURL: path,
  headers: {
    Authorization: `Api-key ${process.env.API_KEY}`,
  },
})

export default api
