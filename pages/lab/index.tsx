import React from 'react'

import { Player } from 'video-react'

import TemplateFrontEnd from '@/components/templates/frontend'

function YoutubeVIdeo() {
  return (
    <TemplateFrontEnd>
      <div
        style={{
          width: '720px',
          height: '480px',
        }}
      >
        <Player
          playsInline
          poster="/assets/poster.png"
          src="http://localhost:3000/api/video?videoId=2fs-JM16XRg"
        />
      </div>
    </TemplateFrontEnd>
  )
}

export default YoutubeVIdeo
