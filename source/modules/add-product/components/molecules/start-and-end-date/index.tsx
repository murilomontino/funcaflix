import React, { useEffect, useMemo, useState } from 'react'

import { IFormProductValues } from '@/modules/add-product/type'
import { useFormikContext } from 'formik'

import DatePickerCustom from '@/components/atom/date-picker'

type Props = {
  startDate: string
  endDate: string
  onChangeStartDate: (date: string) => void
  onChangeEndDate: (date: string) => void
}

const StartAndEndDate = ({ endDate, startDate, onChangeEndDate, onChangeStartDate }: Props) => {
  const { errors } = useFormikContext<IFormProductValues>()

  const [disabled, setDisabled] = useState(true)
  const [startDateState, setStartDate] = useState<Date>(() => {
    if (startDate) {
      return new Date(startDate)
    }
    return null
  })
  const [endDateState, setEndDate] = useState<Date>(() => {
    if (endDate) {
      return new Date(endDate)
    }
    return null
  })
  const onChangeStartDateState = (date: Date) => {
    setStartDate(date)
    onChangeStartDate(date?.toISOString())
  }

  const onChangeEndDateState = (date: Date) => {
    setEndDate(date)
    onChangeEndDate(date?.toISOString())
  }

  const memoDateMinimum = useMemo(() => new Date(startDateState), [startDateState])

  useEffect(() => {
    if (!startDateState) setDisabled(true)
    else setDisabled(false)
  }, [startDateState])

  return (
    <div
      style={{
        display: 'flex',
        zIndex: 10,
        flexDirection: 'row',
      }}
    >
      <DatePickerCustom
        error={errors.publishedDate}
        topic="Data de Início"
        requered
        onChangeValue={onChangeStartDateState}
        value={startDateState}
        colorIcon={'#000'}
      />
      <DatePickerCustom
        error={errors.endDate}
        disabled={disabled}
        topic="Data de Fim"
        onChangeValue={onChangeEndDateState}
        minimumDate={memoDateMinimum}
        value={endDateState}
        colorIcon={'#000'}
      />
    </div>
  )
}

export default StartAndEndDate
