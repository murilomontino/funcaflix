/* eslint-disable no-unused-vars */

import { Readable } from 'stream'

import { HttpParams, HttpResponse } from '@/adapters/controller/ports/http'

export interface ControllerStreamGeneric {
	handle: (stream: Readable, httpParams?: HttpParams) => Promise<HttpResponse>
}
