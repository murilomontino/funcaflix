export type Either<L, A> = Left<L, A> | Right<L, A>

export class Left<L, A> {
	readonly value: L

	constructor(value: L) {
		this.value = value
	}

	isLeft(): this is Left<L, A> {
		return true
	}

	isRight(): this is Right<L, A> {
		return false
	}

	extract(): L {
		return this.value
	}
}

export class Right<L, A> {
	readonly value: A

	constructor(value: A) {
		this.value = value
	}

	isLeft(): this is Left<L, A> {
		return false
	}

	isRight(): this is Right<L, A> {
		return true
	}

	extract(): A {
		throw this.value
	}
}

export const left = <L, A>(l: L): Either<L, A> => {
	return new Left<L, A>(l)
}

export const right = <L, A>(a: A): Either<L, A> => {
	return new Right<L, A>(a)
}

export type PromiseEither<L, A> = Promise<Either<L, A>>
