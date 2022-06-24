import { Express } from 'express'
import ytdl from 'ytdl-core'

import SetupRoutes from './setup/routes'

const YOUTUBE = 'https://www.youtube.com/watch?v='
class Api {
  constructor(private readonly express: Express) {}

  init() {
    this.express.get('/api/audio*', async (req, res) => {
      const { videoId } = req.query

      const url = YOUTUBE + videoId.toString()

      res.header(`Content-Disposition', 'attachment;  filename="audio.mp3"')`)

      const audioonly = ytdl(url, {
        quality: 'highestaudio',
        filter: 'audioonly',
      })

      audioonly.pipe(res)
    })
    this.express.get('/api/video*', async (req, res) => {
      const { videoId } = req.query

      const url = YOUTUBE + videoId.toString()

      res.header(`Content-Disposition', 'attachment;  filename="video.mp4"')`)

      const video = ytdl(url, {
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

      video.pipe(res)
    })
    SetupRoutes(this.express)
  }
}

export default Api
