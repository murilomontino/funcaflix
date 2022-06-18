/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import theme from '@/theme'

import css from './drag-drop.module.css'
import { FileUploader } from './react-drag-drop-files'

type Props = {
  fileTypes?: string[]
  onChangeFile: (file: File[]) => void
  label?: string
  multiple?: boolean
  classes?: string
}

function DragDrop({
  onChangeFile,
  multiple = true,
  label = 'SELECIONE OS PRODUTOS OU ARRASTE E SOLTE AQUI -',
  fileTypes = ['JPG', 'PNG', 'JPEG'],
  classes = '',
}: Props) {
  const handleChange = async (file: File | FileList) => {
    if (multiple) {
      const files = Array.from(file as FileList)
      onChangeFile(files)
    } else {
      onChangeFile([file as File])
    }
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
