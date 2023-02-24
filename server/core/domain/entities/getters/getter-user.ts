import { IGetterUser } from '@/types/getters'
import { IUser } from '@/types/setters'

import { GetterEntity } from './getter-entity'

export class GetterUser extends GetterEntity<IGetterUser> implements IUser {
	id: number
	cpf: string
	cpf_cnpj: string
	cpfRepresented: string
	representative: string
	email: string
	name: string
	type: string
	city: string
	password: string
	typeAccess: string
	dateRegister: string
	dateUpdate: string
	validAccount: number
	accessKey: string
	ipUsed: string
	accessCount: number
	updatedByAdmin: number
	idValidated: number
	typeUser: number
	sector: string
	agency: string
	migrated: string
	idMigrated: number
	columnControlDocs: number
	session: number
	dateLastAccess: string
	active: number
	dateLogout: string
	idAgency: number

	private constructor() {
		super()
	}

	defineId(id: number): GetterUser {
		this.id = id
		return this
	}

	defineCpf(cpf: string): GetterUser {
		this.cpf = cpf
		return this
	}

	defineCpfCnpj(cpf_cnpj: string): GetterUser {
		this.cpf_cnpj = cpf_cnpj

		return this
	}

	defineCpfRepresented(cpfRepresented: string): GetterUser {
		this.cpfRepresented = cpfRepresented
		return this
	}

	defineRepresentative(representative: string): GetterUser {
		this.representative = representative
		return this
	}

	defineEmail(email: string): GetterUser {
		this.email = email
		return this
	}

	defineName(name: string): GetterUser {
		this.name = name
		return this
	}

	defineType(type: string): GetterUser {
		this.type = type
		return this
	}

	defineCity(city: string): GetterUser {
		this.city = city
		return this
	}

	definePassword(password: string): GetterUser {
		this.password = null
		return this
	}

	defineTypeAccess(typeAccess: string): GetterUser {
		this.typeAccess = typeAccess
		return this
	}

	defineDateRegister(dateRegister: string): GetterUser {
		this.dateRegister = dateRegister
		return this
	}

	defineDateUpdate(dateUpdate: string): GetterUser {
		this.dateUpdate = dateUpdate
		return this
	}

	defineValidAccount(validAccount: number): GetterUser {
		this.validAccount = validAccount
		return this
	}

	defineAccessKey(accessKey: string): GetterUser {
		this.accessKey = accessKey
		return this
	}

	defineIpUsed(ipUsed: string): GetterUser {
		this.ipUsed = ipUsed
		return this
	}

	defineAccessCount(accessCount: number): GetterUser {
		this.accessCount = accessCount
		return this
	}

	defineUpdatedByAdmin(updatedByAdmin: number): GetterUser {
		this.updatedByAdmin = updatedByAdmin
		return this
	}

	defineIdValidated(idValidated: number): GetterUser {
		this.idValidated = idValidated
		return this
	}

	defineTypeUser(typeUser: number): GetterUser {
		this.typeUser = typeUser
		return this
	}

	defineSector(sector: string): GetterUser {
		this.sector = sector
		return this
	}

	defineAgency(agency: string): GetterUser {
		this.agency = agency
		return this
	}

	defineMigrated(migrated: string): GetterUser {
		this.migrated = migrated
		return this
	}

	defineIdMigrated(idMigrated: number): GetterUser {
		this.idMigrated = idMigrated
		return this
	}

	defineColumnControlDocs(columnControlDocs: number): GetterUser {
		this.columnControlDocs = columnControlDocs
		return this
	}

	defineSession(session: number): GetterUser {
		this.session = session
		return this
	}

	defineDateLastAccess(dateLastAccess: string): GetterUser {
		this.dateLastAccess = dateLastAccess
		return this
	}

	defineActive(active: number): GetterUser {
		this.active = active
		return this
	}

	defineDateLogout(dateLogout: string): GetterUser {
		this.dateLogout = dateLogout
		return this
	}

	defineIdAgency(idAgency: number): GetterUser {
		this.idAgency = idAgency
		return this
	}

	static build(user: IGetterUser) {
		return new GetterUser()
			.defineId(user.id)
			.defineCpf(user.cpf)
			.defineCpfCnpj(user.cpf_cnpj)
			.defineCpfRepresented(user.cpfRepresented)
			.defineRepresentative(user.representative)
			.defineEmail(user.email)
			.defineName(user.name)
			.defineType(user.type)
			.defineCity(user.city)
			.definePassword(user.password)
			.defineTypeAccess(user.typeAccess)
			.defineDateRegister(user.dateRegister)
			.defineDateUpdate(user.dateUpdate)
			.defineValidAccount(user.validAccount)
			.defineAccessKey(user.accessKey)
			.defineIpUsed(user.ipUsed)
			.defineAccessCount(user.accessCount)
			.defineUpdatedByAdmin(user.updatedByAdmin)
			.defineIdValidated(user.idValidated)
			.defineTypeUser(user.typeUser)
			.defineSector(user.sector)
			.defineAgency(user.agency)
			.defineMigrated(user.migrated)
			.defineIdMigrated(user.idMigrated)
			.defineColumnControlDocs(user.columnControlDocs)
			.defineSession(user.session)
			.defineDateLastAccess(user.dateLastAccess)
			.defineActive(user.active)
			.defineDateLogout(user.dateLogout)
			.defineIdAgency(user.idAgency)
	}

	params(): IGetterUser {
		return {
			id: this.id,
			cpf: this.cpf,
			cpf_cnpj: this.cpf_cnpj,
			cpfRepresented: this.cpfRepresented,
			representative: this.representative,
			email: this.email,
			name: this.name,
			type: this.type,
			city: this.city,
			password: this.password,
			typeAccess: this.typeAccess,
			dateRegister: this.dateRegister,
			dateUpdate: this.dateUpdate,
			validAccount: this.validAccount,
			accessKey: this.accessKey,
			ipUsed: this.ipUsed,
			accessCount: this.accessCount,
			updatedByAdmin: this.updatedByAdmin,
			idValidated: this.idValidated,
			typeUser: this.typeUser,
			sector: this.sector,
			agency: this.agency,
			migrated: this.migrated,
			idMigrated: this.idMigrated,
			columnControlDocs: this.columnControlDocs,
			session: this.session,
			dateLastAccess: this.dateLastAccess,
			active: this.active,
			dateLogout: this.dateLogout,
			idAgency: this.idAgency,
		}
	}

	// username#id
	// username minusculo e sem acentos
	// username primeiro e ultimo nome
	generateUsernameAndID(): string {
		const name = this.name
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
		const names = name.split(' ')
		const username = names[0] + names[names.length - 1]
		return `${username}#${this.id}`
	}
}
