import { GetterProjects } from "@/domain/entities";
import { IGetterProduct } from "@/types/getters";

type OmitElements =
    | 'cpf_cnpj'
    | 'idUser'
    | 'idUserRegistered'
    | 'subCategory'
    | 'category'
    | 'financialResource';

export default function mapOpportunityForProduct(opportunity: GetterProjects):
    Omit<IGetterProduct, OmitElements> {
    return {
        id: opportunity.id as unknown as number,
        title: opportunity.nameProject,
        about: opportunity.aboutProject,
        thumbnail: opportunity.thumbnail || 'logo',
        active: opportunity.status === 1,
        createdAt: opportunity.createdAt,
        link: opportunity.urlProject,
    };
}