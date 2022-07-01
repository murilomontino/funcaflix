import React from 'react'

import { useField } from 'formik'

import HelperText from '../helper-text'
import { InputField } from './styles'

const Field = (props) => {
  const [inputProps, meta] = useField(props)
  const id = props.id || props.name

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <InputField id={id} {...inputProps} {...props} />
      {meta.touched && meta.error && <HelperText text={meta.error?.toString()} visible />}
    </div>
  )
}

export default Field
