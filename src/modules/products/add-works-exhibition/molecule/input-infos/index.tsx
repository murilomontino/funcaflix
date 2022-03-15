import React, { useCallback } from 'react'
import { StyleSheet } from 'react-native'

import theme from '@/theme'

import Button from '@/components/atom/button'
import InputTopic from '@/components/molecule/input-topic'

import { useHookInputInfos } from './hooks'
import { ContainerInfo, ContainerBlocksInfos, ContainerBlock, Info, Topic } from './styles'

import { useSize } from '@/hooks/utils/use-size'

type Props = {
  valueArtist: string
  valueDimension: string
  valueEdition: string
  valueMold: string
  valueOriginal: boolean
  valuePrint: string
  valueTechnique: string
  valueTitle: string
  valueYear: string
  idWork: string
  onChangeAttrYearWork: (value: string) => void
  onChangeAttrArtistWork: (value: string) => void
  onChangeAttrTitleWork: (value: string) => void
  onChangeAttrDimensionWork: (value: string) => void
  onChangeAttrEditionWork: (value: string) => void
  onChangeAttrPrintWork: (value: string) => void
  onChangeAttrMoldWork: (value: string) => void
  onChangeAttrOriginalWork: (value: boolean) => void
  onChangeAttrTechniqueWork: (value: string) => void
  submit: (id: string) => Promise<void>
}

const InputInfos = ({
  valueArtist,
  valueDimension,
  valueEdition,
  valueMold,
  valueOriginal,
  valuePrint,
  valueTechnique,
  valueTitle,
  valueYear,
  onChangeAttrArtistWork,
  onChangeAttrDimensionWork,
  onChangeAttrEditionWork,
  onChangeAttrPrintWork,
  onChangeAttrMoldWork,
  onChangeAttrOriginalWork,
  onChangeAttrTechniqueWork,
  onChangeAttrTitleWork,
  onChangeAttrYearWork,
  submit,
  idWork,
}: Props) => {
  const { SCREEN_SMALLER_THAN_MEDIUM_SIZE } = useSize()

  const {
    artist,
    dimension,
    edition,
    mold,
    original,
    validate,
    print,
    setArtist,
    setDimension,
    setEdition,
    setMold,
    setOriginal,
    setPrint,
    setTechnique,
    setTitle,
    setYear,
    technique,
    title,
    year,
  } = useHookInputInfos({
    item: {
      artist: valueArtist,
      dimension: valueDimension,
      edition: valueEdition,
      mold: valueMold,
      original: valueOriginal,
      print: valuePrint,
      technique: valueTechnique,
      title: valueTitle,
      year: valueYear,
    },
  })

  const onChangeTitle = (value: string) => {
    setTitle(value)
    onChangeAttrTitleWork(value)
  }

  const onChangeArtist = (value: string) => {
    setArtist(value)
    onChangeAttrArtistWork(value)
  }

  const onChangeYear = (value: string) => {
    setYear(value)
    onChangeAttrYearWork(value)
  }

  const onChangeDimension = (value: string) => {
    setDimension(value)
    onChangeAttrDimensionWork(value)
  }

  const onChangeEdition = (value: string) => {
    setEdition(value)
    onChangeAttrEditionWork(value)
  }

  const onChangePrint = (value: string) => {
    setPrint(value)
    onChangeAttrPrintWork(value)
  }

  const onChangeMold = (value: string) => {
    setMold(value)
    onChangeAttrMoldWork(value)
  }

  const onChangeOriginal = (value: boolean) => {
    setOriginal(value)
    onChangeAttrOriginalWork(value)
  }

  const onChangeTechnique = (value: string) => {
    setTechnique(value)
    onChangeAttrTechniqueWork(value)
  }

  const onSubmit = useCallback(async () => {
    await submit(idWork)
  }, [])

  const renderTopic = (topic: string) => {
    return <Topic>{topic}:</Topic>
  }

  return (
    <ContainerInfo>
      <InputTopic
        value={title}
        onChangeText={onChangeTitle}
        placeholder={'Título'}
        styleViewContainer={{
          width: '50%',
          maxHeight: 30,
          alignSelf: 'center',
        }}
      />
      <ContainerBlocksInfos
        style={{
          flex: 1,
          flexDirection: SCREEN_SMALLER_THAN_MEDIUM_SIZE ? 'column' : 'row',
          width: '100%',
        }}
      >
        <ContainerBlock>
          <Info>
            {renderTopic('Artista')}
            <InputTopic
              value={artist}
              onChangeText={onChangeArtist}
              styleViewContainer={{ maxHeight: 20 }}
            />
          </Info>
          <Info>
            {renderTopic('Ano')}
            <InputTopic
              value={year}
              onChangeText={onChangeYear}
              styleViewContainer={{ maxHeight: 20 }}
            />
          </Info>

          <Info>
            {renderTopic('Dimensão')}
            <InputTopic
              value={dimension}
              onChangeText={onChangeDimension}
              styleViewContainer={{ maxHeight: 20 }}
            />
          </Info>
          <Info>
            {renderTopic('Tecnica')}
            <InputTopic
              value={technique}
              onChangeText={onChangeTechnique}
              styleViewContainer={{ maxHeight: 20 }}
            />
          </Info>
        </ContainerBlock>
        <ContainerBlock>
          <Info>
            {renderTopic('Edição')}
            <InputTopic
              value={edition}
              onChangeText={onChangeEdition}
              styleViewContainer={{ maxHeight: 20 }}
            />
          </Info>
          <Info>
            {renderTopic('Impressão')}
            <InputTopic
              value={print}
              onChangeText={onChangePrint}
              styleViewContainer={{ maxHeight: 20 }}
            />
          </Info>
          <Info>
            {renderTopic('Moldura')}
            <InputTopic
              value={mold}
              onChangeText={onChangeMold}
              styleViewContainer={{ maxHeight: 20 }}
            />
          </Info>
        </ContainerBlock>
        <ContainerBlock style={{ justifyContent: 'space-between' }}>
          <Info>
            {renderTopic('Obra Original')}
            {/* <CheckBox value={original} onValueChange={onChangeOriginal} /> */}
          </Info>
          <Button
            text="Enviar"
            disabled={!validate}
            color={theme.COLORS.CONFIRM}
            style={styles.container}
            textStyle={styles.textButton}
            onPress={onSubmit}
          />
        </ContainerBlock>
      </ContainerBlocksInfos>
    </ContainerInfo>
  )
}

export default InputInfos

const styles = StyleSheet.create({
  container: {
    minWidth: 120,
    width: 120,
    minHeight: 30,
    maxHeight: 30,
    borderWidth: 1,
    borderRadius: 2,
  },
  textButton: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: theme.COLORS.TEXT,
  },
})
