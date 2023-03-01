/* eslint-disable no-unused-vars */
import { Server, Socket } from 'socket.io'

export interface SocketGeneric {
	on: (io: Server, socket: Socket) => Promise<void>
}
