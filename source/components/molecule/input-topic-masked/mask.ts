export const maskCPFandCNPJ = (text: string) => {
  let value = text
  if (value.length > 14) {
    value = value.replaceAll('.', '').replaceAll('-', '')
    value = maskCNPJ(value)

    return value
  } else {
    value = value.replaceAll('.', '').replaceAll('-', '').replaceAll('/', '')
    value = maskCPF(value)

    return value
  }
}

// mascara de cpf
export const maskCPF = (text: string) => {
  const regexCPF = /^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/
  let value = text
  if (!value.match(regexCPF)) {
    value = value.replaceAll(/\D/g, '')
    value = value.replace(/^(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  }

  return value
}
// mascara de cnpj
export const maskCNPJ = (text: string) => {
  const regexCNPJ = /^(\d{2}).(\d{3}).(\d{3}\/(\d{4}-(\d{2})))/
  let value = text
  // Regex de CNPJ
  if (!value.match(regexCNPJ)) {
    value = value.replaceAll(/\D/g, '')
    value = value.replace(/^(\d{2})(\d*)/, '$1.$2')
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d)/, '$1/$2')
    value = value.replace(/(\d{4})(\d{1,2})$/, '$1-$2')
  }

  return value
}
// mascara de telefone
export const maskCEP = (text: string) => {
  let value = text.substring(0, 9)
  if (!value.match(/^(\d{5})-(\d{3})$/)) {
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{5})(\d)/, '$1-$2')
  }

  return value
}

// mascara de data e ano
export const maskDate = (text: string) => {
  let value = text.substring(0, 10)

  if (value.length <= 4) {
    return value
  } else {
    if (!value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)) {
      value = value.replace(/\D/g, '')
      value = value.replace(/(\d{2})(\d)/, '$1/$2')
      value = value.replace(/(\d{2})(\d)/, '$1/$2')
    }
  }
  return value
}

// mascara de ISBN
export const maskISBN = (text: string) => {
  let value = text.substring(0, 13)

  if (!value.match(/^(\d{3})-(\d{10})$/)) {
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{3})(\d)/, '$1-$2')
    value = value.replace(/(\d{3})(\d{10})/, '$1-$2')
  }

  return value
}

export const maskNumberMax = (text: string, max: number) => {
  let value = text.substring(0, max)

  if (!value.match(/^(\d{1,})$/)) {
    value = value.replace(/\D/g, '')
  }

  return value
}
