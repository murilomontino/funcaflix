// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import Main from '@/modules/products/add-exhibition'

import TemplateAdmin from '@/components/templates/admin'

import FormProductExhibitionProvider from '@/forms/Product/product-exhibition'

export default function AddExhibition() {
  return (
    <TemplateAdmin>
      <FormProductExhibitionProvider>
        <Main />
      </FormProductExhibitionProvider>
    </TemplateAdmin>
  )
}
