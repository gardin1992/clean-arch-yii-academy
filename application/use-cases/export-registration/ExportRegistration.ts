// receber uma interface se necessário

import { ILoadRegistrationRepository } from "../../../domain/repositories/ILoadRegistrationRepository";
import Cpf from "../../../domain/value-objects/Cpf";
import InputBoundary from "./InputBoundary";
import OutputBoundary, { IOutputBoundary } from "./OutputBoundary";

// porém é aceitavel criar a classe concreta
export default class ExportRegistration {
  repository: ILoadRegistrationRepository;

  constructor(repository: ILoadRegistrationRepository) {
    this.repository = repository;
  }

  // método de executar o usecase
  handle(input: InputBoundary): OutputBoundary {
    const cpf = new Cpf(input.getRegistrationNumber());
    // faz a consulta no banco
    const registration = this.repository.loadByRegistrationNumber(cpf);

    // registration
    const output: IOutputBoundary = {
      name: registration.name,
      email: registration.email.toString(),
      cpf: registration.cpf.toString(),
      birthDate: registration.birthDate.toISOString(),
      registrationAt: registration.registrationAt.toISOString(),
      registrationNumber: registration.registrationNumber,
    };

    console.log("OutputBoundary.output", output);

    return new OutputBoundary(output);
  }
}
