import React from 'react'

import DrawerProvider from './DrawerMenu'
import LoadingContextProvider from './LoadingModal'
import ToastContextProvider from './ToastModal'

type Props = {
  children: React.ReactNode
}

const RootContext = ({ children }: Props) => {
  return (
    <LoadingContextProvider>
      <ToastContextProvider>
        <DrawerProvider>{children}</DrawerProvider>
      </ToastContextProvider>
    </LoadingContextProvider>
  )
}

export default RootContext
