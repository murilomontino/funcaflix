import axios from 'axios'
// Pode ser algum servidor executando localmente:
// http://localhost:3000

export const path = process.env._currentURL

const api = axios.create({
  proxy: false,
  baseURL: path,
  headers: {
    Authorization: `Api-key ${process.env.API_KEY}`,
  },
})

export default api
