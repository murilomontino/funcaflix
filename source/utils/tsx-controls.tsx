import React, { Children } from 'react'

type Props<T> = {
  items: T[]
  children: (item: T, index: number) => React.ReactNode
}

export function For<T>({ children, items }: Props<T>) {
  return (
    <>
      {items.map((item, index) => {
        return children(item, index)
      })}
    </>
  )
}

type PropsWhen = {
  condition: boolean
  children: React.ReactNode
}

export function When({ condition, children }: PropsWhen) {
  return condition ? <React.Fragment>{children} </React.Fragment> : null
}

type IWhen = React.ReactNode & {
  props: {
    condition: boolean
  }
}

type PropsChoose = {
  children: IWhen[]
}

export function Choose({ children }: PropsChoose) {
  return (
    <>
      {Children.toArray(children).reduce((previousValue, currentValue) => {
        return (previousValue as IWhen)?.props?.condition ? previousValue : currentValue
      }, null)}
    </>
  )
}

export function Otherwise({ children, condition = true }) {
  return <React.Fragment>{children}</React.Fragment>
}

export function If({ condition, children }: PropsWhen) {
  return condition ? <React.Fragment>{children}</React.Fragment> : null
}
