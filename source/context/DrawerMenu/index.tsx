/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react'
import Drawer from 'react-modern-drawer'

import NavBar from '@/components/molecule/nav-bar'

type ContextDrawer = {
  toggleDrawer: () => void
}

const DrawerContext = createContext({} as ContextDrawer)

type Props = {
  children: React.ReactNode
}

const DrawerProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <DrawerContext.Provider
      value={{
        toggleDrawer,
      }}
    >
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      >
        <NavBar flexDirection="column" />
      </Drawer>
      {children}
    </DrawerContext.Provider>
  )
}

export default DrawerProvider

export const useDrawer = (): ContextDrawer => {
  return useContext(DrawerContext)
}
