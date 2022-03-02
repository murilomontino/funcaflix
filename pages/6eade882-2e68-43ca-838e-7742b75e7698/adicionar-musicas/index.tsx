// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import Main from '@/modules/products/add-music'

import TemplateAddProduct from '@/components/templates/add-product'

import FormProductMusicProvider from '@/forms/Product/product-music'

export default function App() {
  return (
    <TemplateAddProduct>
      <FormProductMusicProvider>
        <Main />
      </FormProductMusicProvider>
    </TemplateAddProduct>
  )
}
