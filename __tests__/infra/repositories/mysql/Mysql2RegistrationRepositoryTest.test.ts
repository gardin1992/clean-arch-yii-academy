import { mysqlConnect } from "../../../../configs/db";
import Cpf from "../../../../domain/value-objects/Cpf";
import Mysql2RegistrationRepository from "../../../../infra/repositories/mysql/Mysql2RegistrationRepository";

const Mysql2RegistrationRepositoryTest = async () => {
  try {
    const repository = new Mysql2RegistrationRepository(await mysqlConnect());

    const registration = await repository.loadByRegistrationNumber(
      new Cpf("01234567890")
    );

    console.log(registration);

    return process.exit();
  } catch (e) {
    console.log(e);
  }
};

Mysql2RegistrationRepositoryTest().finally();
