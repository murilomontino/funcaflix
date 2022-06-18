// @generated: @expo/next-adapter@2.1.52
import React, { useEffect } from 'react'

import Main from '@/modules/add-product'

import TemplateAdmin from '@/components/templates/admin'

import FormProductExhibitionProvider from '@/forms/Product/product-exhibition'

export default function App() {
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <TemplateAdmin>
      <FormProductExhibitionProvider>
        <Main />
      </FormProductExhibitionProvider>
    </TemplateAdmin>
  )
}
