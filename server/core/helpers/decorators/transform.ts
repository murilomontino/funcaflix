// decorator for transform params in use case execute method
// Type of params is unknown, so we need to cast it to the correct type

export function Transform(type: any, keys: string[]) {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const originalMethod = descriptor.value

		try {
			descriptor.value = function (...args: any[]) {
				const params = args[1]
				const keys = Object.keys(params)

				keys.forEach((key) => {
					if (keys.includes(key)) {
						params[key] = type(params[key])
					}
				})

				return originalMethod.apply(this, args)
			}

			return descriptor
		} catch (err) {
			return descriptor
		}
	}
}
