import type { Server as ServerHTTP } from 'http'
import type { Server as ServerHTTPS } from 'https'
import { Server } from 'socket.io'
import ytdl from 'ytdl-core'

const YOUTUBE = 'https://www.youtube.com/watch?v='

const streamYt = (videoId) => {
  const url = YOUTUBE + videoId.toString()

  return ytdl(url, {
    quality: 'highest',
    filter(format) {
      return (
        format.container === 'mp4' &&
        format.width <= 1280 &&
        format.height <= 720 &&
        !format.hasAudio
      )
    },
  })
}

class SocketIO {
  private io: Server

  constructor(private readonly server: ServerHTTPS | ServerHTTP) {
    this.io = new Server(this.server, {
      cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
      },
    })
  }

  public async init() {
    this.io.on('connection', (socket) => {
      console.log('a user connected', socket.id)

      socket.on('video-id', (data) => {
        const yt = streamYt(data.videoId)

        yt.on('info', (info) => {
          socket.emit('info', info)
        })

        yt.on('data', (chunk) => {
          socket.emit('data', chunk)
        })
      })
    })
  }
}

export default SocketIO
