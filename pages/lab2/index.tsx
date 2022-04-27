import React, { useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useHover } from 'react-native-web-hooks'

import theme from '@/theme'

import TemplateFrontEnd from '@/components/templates/frontend'

const Lab = () => {
  const [hoveredDiv, setHoveredDiv] = useState(false)

  const ref = useRef()
  const hover = useHover(ref)

  return (
    <TemplateFrontEnd>
      <div
        style={{
          display: 'flex',
          flex: 1,
          minHeight: '100vh',
          width: '100vw',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            onMouseEnter={() => setHoveredDiv(true)}
            onMouseLeave={() => setHoveredDiv(false)}
            style={{
              display: 'flex',
              position: 'relative',
              width: '250px',
              height: '150px',
              backgroundColor: 'white',
            }}
          >
            {(hover || hoveredDiv) && (
              <View
                ref={ref}
                style={{
                  position: 'absolute',
                  top: -100,
                  display: 'flex',
                  width: '250px',
                  height: '300px',
                  backgroundColor: 'yellow',
                }}
              />
            )}
          </div>
        </div>
      </div>
    </TemplateFrontEnd>
  )
}

export default Lab

const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    height: 500,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.BACKGROUND_FRONTEND,
  },

  text: {
    fontSize: 16,
    color: theme.COLORS.TEXT,
  },
})
