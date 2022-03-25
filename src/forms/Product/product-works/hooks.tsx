import { useContextSelector } from 'use-context-selector'

import { FormProductWorkContext } from '.'

export const useFormWorks = () => {
  const works = useContextSelector(FormProductWorkContext, (state) => state.works)

  const onChangeWorks = useContextSelector(FormProductWorkContext, (state) => state.onChangeWorks)

  return {
    works,
    onChangeWorks,
  }
}

export const useFormWorksLoading = () => {
  const worksLoading = useContextSelector(FormProductWorkContext, (state) => state.loading)
  const showLoading = useContextSelector(FormProductWorkContext, (state) => state.showLoading)
  const hideLoading = useContextSelector(FormProductWorkContext, (state) => state.hideLoading)
  return {
    worksLoading,
    showLoading,
    hideLoading,
  }
}

export const useFormGetterWorks = () => {
  const getterWorks = useContextSelector(FormProductWorkContext, (state) => state.getterWorks)

  return {
    getterWorks,
  }
}

export const useFormWorksAttrs = () => {
  const onChangeAttrEditionWork = useContextSelector(
    FormProductWorkContext,
    (value) => value.onChangeAttrEditionWork
  )

  const onChangeAttrMoldWork = useContextSelector(
    FormProductWorkContext,
    (value) => value.onChangeAttrMoldWork
  )

  const onChangeAttrOriginalWork = useContextSelector(
    FormProductWorkContext,
    (value) => value.onChangeAttrOriginalWork
  )

  const onChangeAttrPrintWork = useContextSelector(
    FormProductWorkContext,
    (value) => value.onChangeAttrPrintWork
  )

  const onChangeAttrTechniqueWork = useContextSelector(
    FormProductWorkContext,
    (value) => value.onChangeAttrTechniqueWork
  )

  const onChangeAttrTitleWork = useContextSelector(
    FormProductWorkContext,
    (value) => value.onChangeAttrTitleWork
  )

  const onChangeAttrYearWork = useContextSelector(
    FormProductWorkContext,
    (value) => value.onChangeAttrYearWork
  )

  const onChangeAttrArtistWork = useContextSelector(
    FormProductWorkContext,
    (value) => value.onChangeAttrArtistWork
  )

  const onChangeAttrDimensionWork = useContextSelector(
    FormProductWorkContext,
    (value) => value.onChangeAttrDimensionWork
  )

  return {
    onChangeAttrEditionWork,
    onChangeAttrMoldWork,
    onChangeAttrOriginalWork,
    onChangeAttrPrintWork,
    onChangeAttrTechniqueWork,
    onChangeAttrTitleWork,
    onChangeAttrYearWork,
    onChangeAttrArtistWork,
    onChangeAttrDimensionWork,
  }
}

export const useFormWorksSubmit = () => {
  const submit = useContextSelector(FormProductWorkContext, (state) => state.submit)
  return {
    submit,
  }
}
