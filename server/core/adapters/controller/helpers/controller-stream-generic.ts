/* eslint-disable no-unused-vars */

import { HttpParams, HttpResponse } from '@/adapters/controller/ports/http'
import { Readable } from 'stream'

export interface ControllerStreamGeneric {
	handle: (stream: Readable, httpParams?: HttpParams) => Promise<HttpResponse>
}
