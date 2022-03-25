// @generated: @expo/next-adapter@2.1.52
import React, { useEffect } from 'react'

import Main from '@/modules/products/add-video'

import TemplateAddProduct from '@/components/templates/add-product'

import FormProductVideoProvider from '@/forms/Product/product-video'

import socket from '@/services/config/socket'

export default function AddVideo() {
  useEffect(() => {
    socket.connect()

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <TemplateAddProduct>
      <FormProductVideoProvider>
        <Main />
      </FormProductVideoProvider>
    </TemplateAddProduct>
  )
}
