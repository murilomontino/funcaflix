/* eslint-disable @typescript-eslint/no-var-requires */
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Animated } from 'react-native'

import { Asset } from 'expo-asset'

import theme from '@/theme'
import { AntDesign } from '@expo/vector-icons'

import {
  Title,
  Toast,
  Message,
  ContainerIcon,
  Image,
  ContainerMessage,
  ContainerClose,
} from './styles'

import ErrorImg from '@/assets/Alerts/Error.png'
import SuccessImg from '@/assets/Alerts/Success.png'
import WarningImg from '@/assets/Alerts/Warning.png'
import colors from '@/global/colors'

type Toast = 'warning' | 'erro' | 'success'

type Options = {
  icon: Asset
  title: string
  color: string
  message: string
}

type TypeToast = {
  [key in Toast]: Omit<Options, 'message'>
}

type Context = {
  AlertToast: (type: Toast, text: string) => void
}

const ToastContext = createContext<Context>({} as Context)

const ToastContextProvider: React.FC = ({ children }) => {
  const [visible, setVisible] = useState(false)

  const [fadeAnimation] = useState(new Animated.Value(0))

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start()
  }

  useEffect(() => {
    if (visible) {
      fadeIn()
    } else {
      fadeOut()
    }
  }, [visible])

  const typesToast: TypeToast = {
    erro: {
      icon: ErrorImg,
      color: colors.erro,
      title: 'Erro!',
    },
    warning: {
      icon: WarningImg,
      color: colors.warning,
      title: 'Aviso!',
    },
    success: {
      icon: SuccessImg,
      color: colors.success,
      title: 'Sucesso!',
    },
  }

  const [options, setOptions] = useState<Options>({
    ...typesToast.success,
    message: 'loren ipsum dolor sit amet',
  })

  const AlertToast = (type: Toast, text: string) => {
    setOptions({
      color: typesToast[type].color,
      icon: typesToast[type].icon,
      title: typesToast[type].title,
      message: text,
    })
    setVisible(true)
    setTimeout(() => {
      setVisible(false)
    }, 10000)
  }

  const closeToast = () => {
    fadeOut()
  }

  const ToastModal = () => {
    return (
      <Toast
        style={[
          {
            backgroundColor: options.color,
          },
          {
            opacity: fadeAnimation,
          },
        ]}
      >
        <ContainerIcon>
          <Image source={options.icon} />
        </ContainerIcon>
        <ContainerMessage>
          <Title>{options.title}</Title>
          <Message>{options.message}</Message>
        </ContainerMessage>
        <ContainerClose onPress={closeToast}>
          <AntDesign name="close" size={24} color={theme.COLORS.ICON_SECONDARY} />
        </ContainerClose>
      </Toast>
    )
  }
  return (
    <ToastContext.Provider
      value={{
        AlertToast,
      }}
    >
      {children}
      {visible && <ToastModal />}
    </ToastContext.Provider>
  )
}

export default ToastContextProvider

export const useToast = (): Context => {
  return useContext(ToastContext)
}
