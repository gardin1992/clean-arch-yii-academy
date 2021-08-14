import Registration from "../entities/Registration";
import Cpf from "../value-objects/Cpf";

export interface ILoadRegistrationRepository {
  loadByRegistrationNumber(cpf: Cpf): Promise<Registration>;
}
