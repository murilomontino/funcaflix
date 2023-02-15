import { GetterBook } from "@/domain/entities";
import { PromiseEither } from "@/shared/either";

export interface BookRepository {
    findAll(): PromiseEither<GetterBook[], Error>;
    findById(id: string): PromiseEither<GetterBook, Error>;
}