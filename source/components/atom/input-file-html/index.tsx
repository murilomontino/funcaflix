import React, { ChangeEvent, useState } from 'react'

import { InputFile, Label } from './styles'

type MimeType = 'image/png' | 'image/jpeg' | 'image/jpg' | 'video/*' | 'application/pdf'

type Props = {
  mimeType?: MimeType[]
  onChange: (file: File) => void
  label?: string
}

const InputFileHTML = ({ onChange, mimeType, label = 'Selecione os Arquivos' }: Props) => {
  const [file, setFile] = useState<File>(null)

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const file = e.target.files[0]
    if (file) {
      onChange(file)
      setFile(file)
    }
  }

  return (
    <div>
      <Label htmlFor="arquivo">{label}</Label>
      <InputFile
        type="file"
        name="arquivo"
        id="arquivo"
        onChange={onChangeFile}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        accept={mimeType as any}
      />
    </div>
  )
}

export default InputFileHTML
