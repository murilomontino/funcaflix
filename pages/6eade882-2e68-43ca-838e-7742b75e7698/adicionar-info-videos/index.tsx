// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import Main from '@/modules/products/add-video-info'

import TemplateAddProduct from '@/components/templates/add-product'

import FormProductVideoInfoProvider from '@/forms/Product/product-video-info'

export default function AddInfoVideo() {
  return (
    <TemplateAddProduct>
      <FormProductVideoInfoProvider>
        <Main />
      </FormProductVideoInfoProvider>
    </TemplateAddProduct>
  )
}
