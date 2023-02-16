import React from 'react'

type MemoItemsProps = {
    items: any[]
    mapFunction: (item: any) => any
}

const useMapMemoItems = ({ items, mapFunction }: MemoItemsProps) => {
    return React.useMemo(() => items.map(mapFunction), [items])
}

export default useMapMemoItems