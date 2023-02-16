import { GetterProjects } from "@/domain/entities";
import { IGetterProduct } from "@/types/getters";

export default function mapOpportunityForProduct(opportunity: GetterProjects):
    IGetterProduct {
    return {
        id: opportunity.id as unknown as number,
        title: opportunity.nameProject,
        about: opportunity.aboutProject,
        thumbnail: opportunity.thumbnail || 'logo',
        active: opportunity.status === 1,
        createdAt: opportunity.createdAt,
        link: opportunity.urlProject,
        cpf_cnpj: null,
        idUser: null,
        idUserRegistered: null,
        subCategory: null,
        category: null,
        financialResource: null,
    };
}