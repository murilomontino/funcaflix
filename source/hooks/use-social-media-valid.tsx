import React, { useMemo } from 'react'

const useSocialMediaValid = ({ facebook, instagram, twitter, youtube }) => {
  const [facebookValid, instagramValid, twitterValid, youtubeValid] = useMemo(() => {
    // verifica se começa com http ou https ou se a palavra é Não Declarou
    const regex = /^(http|https)/

    // Retorna apenas os que começam com http ou https, e os que não começam com Não Declarou
    return [
      regex.test(facebook) && !facebook?.startsWith('Não'),
      regex.test(instagram) && !instagram?.startsWith('Não'),
      regex.test(twitter) && !twitter?.startsWith('Não'),
      regex.test(youtube) && !youtube?.startsWith('Não'),
    ]

  }, [facebook, instagram, twitter, youtube])

  return (
    {
      facebookValid,
      instagramValid,
      twitterValid,
      youtubeValid
    }
  )
}

export default useSocialMediaValid