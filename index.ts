import ExportRegistration from "./application/use-cases/export-registration/ExportRegistration";
import InputBoundary from "./application/use-cases/export-registration/InputBoundary";
import OutputBoundary from "./application/use-cases/export-registration/OutputBoundary";
import Registration from "./domain/entities/Registration";
import Cpf from "./domain/value-objects/Cpf";
import Email from "./domain/value-objects/Email";
import PdfCreateNodeAdapter from "./infra/adapters/pdf-create-node-adapter/PdfCreateNodeAdapter";

const registration = new Registration(
  "Joao Vieira",
  new Email("joao.vieira@marttech.com.br"),
  new Cpf("41907122800"),
  new Date("25-03-1992"),
  new Date(),
  "0001"
);

// Entities
const loadRegistrationRepo = new (class {})();
const pdfExporter = new PdfCreateNodeAdapter();
const storage = new (class {})();

// Use case
const exportRegistrationUseCase = new ExportRegistration(
  loadRegistrationRepo,
  pdfExporter,
  storage
);
const input = new InputBoundary(
  "41907122800",
  "xpto",
  __dirname + "../storage"
);
const output = exportRegistrationUseCase.handle(input);
