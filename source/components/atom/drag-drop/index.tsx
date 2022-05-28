/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import theme from '@/theme'

import css from './drag-drop.module.css'
import { FileUploader } from './react-drag-drop-files'

type Props = {
  fileTypes?: string[]
  onChangeFile: (file: File | FileList) => void
  label?: string
  multiple?: boolean
  classes?: string
}

function DragDrop({
  onChangeFile,
  multiple = true,
  label = 'SELECIONE AS OBRAS OU ARRASTE E SOLTE AQUI -',
  fileTypes = ['JPG', 'PNG', 'JPEG'],
  classes = '',
}: Props) {
  const handleChange = async (file: File | File[]) => {
    onChangeFile(file as any)
  }

  return (
    <FileUploader
      multiple={multiple}
      handleChange={handleChange}
      classes={[css.dragDrop, classes].join(' ')}
      labelStyles={{
        color: theme.COLORS.TEXT,
        fontSize: '1rem',
      }}
      label={label}
      name="file"
      types={fileTypes}
    />
  )
}

export default DragDrop
