import { useMemo, useState } from 'react'

type Props = {
  item: {
    artist: string
    dimension: string
    edition: string
    mold: string
    original: boolean
    print: string
    technique: string
    title: string
    year: string
  }
}
export const useHookInputInfos = ({ item }: Props) => {
  const [title, setTitle] = useState(item.title)
  const [artist, setArtist] = useState(item.artist)
  const [year, setYear] = useState(item.year)
  const [dimension, setDimension] = useState(item.dimension)
  const [edition, setEdition] = useState(item.edition)
  const [print, setPrint] = useState(item.print)
  const [mold, setMold] = useState(item.mold)
  const [original, setOriginal] = useState<boolean>(item.original)
  const [technique, setTechnique] = useState(item.technique)

  const validate = useMemo(() => {
    return !!(
      title?.trim() &&
      artist?.trim() &&
      year?.trim() &&
      dimension?.trim() &&
      edition?.trim() &&
      print?.trim() &&
      mold?.trim() &&
      technique?.trim()
    )
  }, [title, artist, year, dimension, edition, print, mold, technique])

  return {
    title,
    artist,
    year,
    dimension,
    edition,
    print,
    mold,
    original,
    technique,
    validate,
    setArtist,
    setTitle,
    setYear,
    setDimension,
    setEdition,
    setPrint,
    setMold,
    setOriginal,
    setTechnique,
  }
}
