// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import Main from '@/modules/products/add-book'

import TemplateAdmin from '@/components/templates/admin'

import FormProductBookProvider from '@/forms/Product/product-book'

export default function App() {
  return (
    <TemplateAdmin>
      <FormProductBookProvider>
        <Main />
      </FormProductBookProvider>
    </TemplateAdmin>
  )
}
