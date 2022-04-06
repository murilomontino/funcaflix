import React, { ChangeEvent, useState } from 'react'

import { InputFile, Label } from './styles'

type MimeType = 'image/png' | 'image/jpeg' | 'image/jpg' | 'video/*' | 'application/pdf'

type Props = {
  mimeType?: MimeType[]
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputFileHTML = ({ onChange, mimeType }: Props) => {
  const [file, setFile] = useState<File>(null)

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0]
    if (file) {
      onChange(e)
      setFile(file)
    }
  }

  return (
    <div>
      <Label htmlFor="arquivo">Enviar Video</Label>
      <InputFile
        type="file"
        name="arquivo"
        id="arquivo"
        onChange={onChangeFile}
        accept={mimeType}
      />
    </div>
  )
}

export default InputFileHTML
