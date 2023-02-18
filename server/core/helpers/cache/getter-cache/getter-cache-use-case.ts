import NodeCache from '@/infrastructure/cache/node-cache'
import { left, PromiseEither, right } from '@/shared/either'

class GetterCache {
	static async execute(key: string): PromiseEither<string, Error> {
		const cache = await NodeCache.get(key)

		if (cache) {
			return left(cache as string)
		}

		return right(new Error('Cache not found'))
	}
}

export default GetterCache
