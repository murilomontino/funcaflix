import type { NextFunction, Request, Response } from 'express'

export default {
	async validateOrigin(req: Request, res: Response, _next: NextFunction) {
		return res.sendStatus(200).end()
	},

	async validateKey(req: Request, res: Response, next: NextFunction) {
		const auth = req.headers.authorization
		const { originalUrl } = req
		if (auth === `Api-key ${process.env.API_KEY}`) {
			return next()
		}

		if (originalUrl.includes('api')) {
			return res.sendStatus(401).end()
		}

		return res.redirect('/')
	},
}
