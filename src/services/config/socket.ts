import io from 'socket.io-client'
import { v4 } from 'uuid'

const socket = io('localhost:8000', {
  transports: ['websocket', 'polling', 'flashsocket'],
  query: {
    user_id: v4(),
  },
  auth: {
    api_key: process.env.API_KEY,
  },
})

export default socket
