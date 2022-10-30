import NodeCache from '@/infrastructure/cache/node-cache'
import { left, right } from '@/shared/either'

const DAY_IN_SECONDS = 86400

class SetterCache {
	static async execute(key: string, value: string) {
		try {
			NodeCache.set(key, value, DAY_IN_SECONDS)
			return left(value)
		} catch (error) {
			return right(error)
		}
	}
}

export default SetterCache
