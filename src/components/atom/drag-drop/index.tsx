import React from 'react'

import theme from '@/theme'

import css from './drag-drop.module.css'
import { FileUploader } from './react-drag-drop-files'

const fileTypes = ['JPG', 'PNG', 'JPEG']

type Props = {
  onChangeFile: (file: File | FileList) => void
  label?: string
}

function DragDrop({
  onChangeFile,
  label = 'SELECIONE AS OBRAS OU ARRASTE E SOLTE AQUI -',
}: Props) {
  const handleChange = async (file: File | File[]) => {
    onChangeFile(file)
  }

  return (
    <FileUploader
      multiple
      handleChange={handleChange}
      classes={css.dragDrop}
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
