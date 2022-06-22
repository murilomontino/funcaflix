import type { Request, Response } from 'express'

import qr from 'qr-image'

export default {
	async generateCode(req: Request, res: Response) {
		try {
			const code = qr.imageSync(req.body.url, {
				type: 'png',
				size: 10,
			})

			// Se for um buffer, converte para base64
			if (code instanceof Buffer) {
				return res.send(code.toString('base64')).status(200).end()
			}

			const data = Buffer.from(code, 'base64').toJSON()

			return res.send(data).status(200).end()
		} catch (error) {
			return res.sendStatus(400).end()
		}
	},
}
