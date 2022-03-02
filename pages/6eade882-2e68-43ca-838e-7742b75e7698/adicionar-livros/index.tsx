// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import Main from '@/modules/products/add-book'

import TemplateAddProduct from '@/components/templates/add-product'

import FormProductBookProvider from '@/forms/Product/product-book'

export default function App() {
  return (
    <TemplateAddProduct>
      <FormProductBookProvider>
        <Main />
      </FormProductBookProvider>
    </TemplateAddProduct>
  )
}
