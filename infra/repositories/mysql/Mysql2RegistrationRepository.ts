import { Connection } from "mysql2/promise";

import Registration from "../../../domain/entities/Registration";
import { ILoadRegistrationRepository } from "../../../domain/repositories/ILoadRegistrationRepository";
import Cpf from "../../../domain/value-objects/Cpf";
import Email from "../../../domain/value-objects/Email";

export default class Mysql2RegistrationRepository
  implements ILoadRegistrationRepository
{
  constructor(private connection: Connection) {}

  async loadByRegistrationNumber(cpf: Cpf): Promise<Registration> {
    const resultQuery = await this.connection.query(
      "SELECT  * FROM registrations WHERE CPF = " + cpf.toString()
    );

    const [rows] = resultQuery;

    if (rows[0] == null) throw new Error("Sem resultados para o CPF.");

    const registrationData = rows[0];

    return new Registration()
      .setName(registrationData["name"])
      .setEmail(new Email(registrationData["email"]))
      .setCpf(cpf)
      .setBirthDate(registrationData["birthDate"])
      .setRegistrationAt(registrationData["creteadAt"])
      .setRegistrationNumber(registrationData["registrationNumber"]);
  }
}
