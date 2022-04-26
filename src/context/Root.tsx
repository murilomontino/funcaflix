import React from 'react'

import DrawerProvider from './DrawerMenu'
import LoadingContextProvider from './LoadingModal'
import ToastContextProvider from './ToastModal'

const RootContext: React.FC = ({ children }) => {
  return (
    <DrawerProvider>
      <LoadingContextProvider>
        <ToastContextProvider>{children}</ToastContextProvider>
      </LoadingContextProvider>
    </DrawerProvider>
  )
}

export default RootContext
