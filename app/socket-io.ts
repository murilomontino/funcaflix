import type { Server as ServerHTTP } from 'http'
import type { Server as ServerHTTPS } from 'https'
import { Server } from 'socket.io'

class SocketIO {
  private io: Server

  constructor(private readonly server: ServerHTTPS | ServerHTTP) {
    this.io = new Server(server)
  }

  public async init() {
    this.io.on('connection', (socket) => {
      console.log('a user connected')
      socket.on('disconnect', () => {
        console.log('user disconnected')
      })
    })
  }
}

export default SocketIO
