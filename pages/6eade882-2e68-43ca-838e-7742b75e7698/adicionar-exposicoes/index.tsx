// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import Main from '@/modules/products/add-exhibition'

import TemplateAddProduct from '@/components/templates/add-product'

import FormProductExhibitionProvider from '@/forms/Product/product-exhibition'

export default function AddExhibition() {
  return (
    <TemplateAddProduct>
      <FormProductExhibitionProvider>
        <Main />
      </FormProductExhibitionProvider>
    </TemplateAddProduct>
  )
}
