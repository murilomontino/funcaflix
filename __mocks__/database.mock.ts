import { vi } from 'vitest'

class DatabaseMock {

    public query: any
    public transaction: any

    constructor(
        {
            query = vi.fn().mockResolvedValue([[], null]),
            transaction = async (callback: any) => {
                return await callback()
            }
        }
    ) {
        this.query = query
        this.transaction = transaction
    }


}

export default DatabaseMock