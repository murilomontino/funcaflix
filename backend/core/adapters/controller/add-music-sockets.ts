/* eslint-disable no-unused-vars */
import { Server, Socket } from 'socket.io'

import { UseCase } from '@/domain/usecases/ports/use-case'
import { SettersTracks } from '@/types'

import { SocketGeneric } from './helpers/socket-generic'

export class AddMusicSockets implements SocketGeneric {
	constructor(
		private readonly AddProductMusicUseCase: UseCase<
			SettersTracks,
			SettersTracks
		>
	) {}

	private async handle(fn: SettersTracks, _io: Server, _socket: Socket) {
		console.log(fn)
		return
	}

	async on(io: Server, socket: Socket) {
		socket.on('add-music', (fn) => {
			this.handle(fn, io, socket)
		})
	}
}

export default AddMusicSockets
