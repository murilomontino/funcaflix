import { IGetterOptions } from '@/types/getters'

export class GetterOption implements IGetterOptions {
	public label: string
	public value: number

	public build(params: IGetterOptions & { id: number }): GetterOption {
		this.label = params.label
		this.value = params.id || params.value
		return this
	}

	public params() {
		return {
			label: this.label,
			value: this.value,
		} as GetterOption
	}
}
