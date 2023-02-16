import React from 'react'

type MemoItemsProps<T, G> = {
    items: T[]
    mapFunction: (item: T) => G
}

function useMapMemoItems<T, G>({ items, mapFunction }: MemoItemsProps<T, G>) {
    return React.useMemo(() => items.map(mapFunction), [items])
}

export default useMapMemoItems