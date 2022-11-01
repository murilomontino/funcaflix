import NodeCache from '@/infrastructure/cache/node-cache'
import { left, PromiseEither, right } from '@/shared/either'

const DAY_IN_SECONDS = 86400

class SetterCache {
	static async execute(key: string, value: string, time = DAY_IN_SECONDS): PromiseEither<string, Error> {
		try {
			NodeCache.set(key, value, time)
			return left(value)
		} catch (error) {
			return right(error)
		}
	}
}

export default SetterCache
