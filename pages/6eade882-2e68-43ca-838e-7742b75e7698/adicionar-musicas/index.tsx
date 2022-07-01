// @generated: @expo/next-adapter@2.1.52
import React from 'react'

import Main from '@/modules/products/add-music'

import TemplateAdmin from '@/components/templates/admin'

import FormProductMusicProvider from '@/forms/Product/product-music'

export default function AddMusic() {
  return (
    <TemplateAdmin>
      <FormProductMusicProvider>
        <Main />
      </FormProductMusicProvider>
    </TemplateAdmin>
  )
}
