/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { StyleSheet, View } from 'react-native'

import theme from '@/theme'

import DragDrop from '@/components/atom/drag-drop'

import {
  useFormWorks,
  useFormWorksAttrs,
  useFormWorksSubmit,
} from '@/forms/Product/product-works/hooks'

import CardWorkInput from '../card-work-input'

type Props = {
  idExhibition: string
}

const NewWorksBox = ({ idExhibition }: Props) => {
  const { works, onChangeWorks } = useFormWorks()
  const { submit } = useFormWorksSubmit()
  const {
    onChangeAttrArtistWork,
    onChangeAttrDimensionWork,
    onChangeAttrEditionWork,
    onChangeAttrMoldWork,
    onChangeAttrOriginalWork,
    onChangeAttrPrintWork,
    onChangeAttrTechniqueWork,
    onChangeAttrTitleWork,
    onChangeAttrYearWork,
  } = useFormWorksAttrs()

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
      {works.map((work) => (
        <CardWorkInput
          horizontal
          key={1}
          item={work}
          idExhibition={idExhibition}
          image={URL.createObjectURL(work.get('arquivo') as File)}
          onChangeAttrArtistWork={onChangeAttrArtistWork(work.get('id') as string)}
          onChangeAttrDimensionWork={onChangeAttrDimensionWork(work.get('id') as string)}
          onChangeAttrEditionWork={onChangeAttrEditionWork(work.get('id') as string)}
          onChangeAttrMoldWork={onChangeAttrMoldWork(work.get('id') as string)}
          onChangeAttrOriginalWork={onChangeAttrOriginalWork(work.get('id') as any)}
          onChangeAttrPrintWork={onChangeAttrPrintWork(work.get('id') as string)}
          onChangeAttrTechniqueWork={onChangeAttrTechniqueWork(work.get('id') as string)}
          onChangeAttrTitleWork={onChangeAttrTitleWork(work.get('id') as string)}
          onChangeAttrYearWork={onChangeAttrYearWork(work.get('id') as string)}
          submit={submit}
        />
      ))}
      <DragDrop onChangeFile={onChangeWorks} />

      {/*  <ContainerButton>
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
      </ContainerButton> */}

      {/* <BoxToConfirmModal
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
      /> */}
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
