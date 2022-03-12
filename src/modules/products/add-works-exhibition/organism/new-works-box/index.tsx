import React, { useCallback, useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import theme from '@/theme'
import { TypesProducts } from '@/types'

import Button from '@/components/atom/button'
import DragDrop from '@/components/atom/drag-drop'
import BoxToConfirmModal from '@/components/molecule/box-to-confirm-modal'

import CardWorkInput from '../../molecule/card-work-input'
import { ContainerButton } from './styles'

type keysWorks =
  | 'id'
  | 'artista'
  | 'titulo'
  | 'ano'
  | 'dimencao'
  | 'edicao'
  | 'impressao'
  | 'moldura'
  | 'obra_original'
  | 'tecnica'
  | 'arquivo'

type Props = {
  idExhibition: string
}

const NewWorksBox = ({ idExhibition }: Props) => {
  const [works, setWorks] = useState<Map<keysWorks, unknown>[]>([])
  const [visibleConfirm, setVisibleConfirm] = useState(false)
  const [visibleWarning, setVisibleWarning] = useState(false)

  const onChangeVisibilityConfirm = (visible: boolean) => {
    setVisibleConfirm(visible)
  }
  const onChangeVisibilityWarning = (visible: boolean) => {
    setVisibleWarning(visible)
  }

  const onChangeFile = useCallback(
    (fileList: FileList) => {
      const files = Array.from(fileList)

      const arrayMap = files.map((item, index) => {
        const map = new Map<keysWorks, unknown>()
        map.set('arquivo', item)
        map.set('ano', '')
        map.set('artista', '')
        map.set('titulo', '')
        map.set('dimencao', '')
        map.set('edicao', '')
        map.set('impressao', '')
        map.set('moldura', '')
        map.set('obra_original', false)
        map.set('tecnica', '')
        map.set('id', index)

        return map
      })

      setWorks((state) => [...state, ...arrayMap])
    },
    [works]
  )

  const data = useMemo(() => {
    return works
  }, [works])

  const disabled = useMemo(() => {
    return works.length === 0
  }, [works])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 500,
      }}
    >
      {data.map((work) => (
        <CardWorkInput
          horizontal
          key={1}
          item={{
            artista: work.get('artista') as string,
            titulo: work.get('titulo') as string,
            ano: work.get('ano') as string,
            dimencao: work.get('dimencao') as string,
            edicao: work.get('edicao') as string,
            impressao: work.get('impressao') as string,
            moldura: work.get('moldura') as string,
            obra_original: work.get('obra_original') as boolean,
            tecnica: work.get('tecnica') as string,
            arquivo: URL.createObjectURL(work.get('arquivo') as File),
            nome_arquivo: (work.get('arquivo') as File).name,
            tipo_de_arquivo: TypesProducts.PHOTOS,
          }}
          idExhibition={idExhibition}
        />
      ))}
      <DragDrop onChangeFile={onChangeFile} />

      <ContainerButton>
        <Button
          disabled={disabled}
          text="Aplicar"
          color={theme.COLORS.CONFIRM}
          style={styles.container}
          textStyle={styles.textButton}
          onPress={() => {
            onChangeVisibilityConfirm(true)
          }}
        />
        <Button
          disabled={disabled}
          text="Cancelar"
          color={theme.COLORS.CANCEL}
          style={styles.container}
          textStyle={styles.textButton}
          onPress={() => {
            onChangeVisibilityWarning(true)
          }}
        />
      </ContainerButton>

      <BoxToConfirmModal
        type="warning"
        onChangeVisibility={onChangeVisibilityWarning}
        onPressCancel={() => {
          onChangeVisibilityWarning(false)
        }}
        onPressConfirm={() => {
          onChangeVisibilityWarning(false)
        }}
        visible={visibleWarning}
      />

      <BoxToConfirmModal
        type="confirm"
        onChangeVisibility={onChangeVisibilityConfirm}
        onPressCancel={() => {
          onChangeVisibilityConfirm(false)
        }}
        onPressConfirm={() => {
          onChangeVisibilityConfirm(false)
        }}
        visible={visibleConfirm}
      />
    </View>
  )
}

export default NewWorksBox

const styles = StyleSheet.create({
  container: {
    width: 100,
    maxHeight: 40,
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
