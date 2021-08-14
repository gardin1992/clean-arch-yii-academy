import ExportRegistration from "./application/use-cases/export-registration/ExportRegistration";
import InputBoundary from "./application/use-cases/export-registration/InputBoundary";
import OutputBoundary from "./application/use-cases/export-registration/OutputBoundary";
import Registration from "./domain/entities/Registration";
import Cpf from "./domain/value-objects/Cpf";
import Email from "./domain/value-objects/Email";

const registration = new Registration(
  "Joao Vieira",
  new Email("joao.vieira@marttech.com.br"),
  new Cpf("41907122800"),
  new Date("25-03-1992"),
  new Date(),
  "0001"
);

// const exportRegistrationUseCase = new ExportRegistration()
// const inputBoundary = new InputBoundary("41907122800")
// const outputBoundary = new OutputBoundary()
