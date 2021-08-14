import ExportRegistration from "./application/use-cases/export-registration/ExportRegistration";
import Registration from "./domain/entities/Registration";
import Cpf from "./domain/value-objects/Cpf";
import Email from "./domain/value-objects/Email";
import LocalStorage from "./infra/adapters/LocalStorage";
import PdfCreateNodeAdapter from "./infra/adapters/pdf-create-node-adapter/PdfCreateNodeAdapter";
import { ExportRegistrationController } from "./infra/http/controllers/ExportRegistrationController";
import {
  IHttpRequest,
  IHttpResponse,
} from "./infra/http/controllers/ports/http";

const exportRegistrationAction = async () => {
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
  const storage = new LocalStorage();

  // Use case

  const request: IHttpRequest = {
    body: "",
  };

  const response: IHttpResponse = {
    body: "",
    statusCode: 400,
  };

  const exportRegistrationUseCase = new ExportRegistration(
    loadRegistrationRepo,
    pdfExporter,
    storage
  );

  const controller = new ExportRegistrationController(
    request,
    response,
    exportRegistrationUseCase
  );

  const output = await controller.handle();
  console.log(output);
};

exportRegistrationAction().finally();
