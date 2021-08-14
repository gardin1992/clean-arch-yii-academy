import { mysqlConnect } from "./configs/db";
import ExportRegistration from "./application/use-cases/export-registration/ExportRegistration";
import LocalStorage from "./infra/adapters/LocalStorage";
import PdfCreateNodeAdapter from "./infra/adapters/pdf-create-node-adapter/PdfCreateNodeAdapter";
import { ExportRegistrationController } from "./infra/http/controllers/ExportRegistrationController";
import {
  IHttpRequest,
  IHttpResponse,
} from "./infra/http/controllers/ports/http";
import Mysql2RegistrationRepository from "./infra/repositories/mysql/Mysql2RegistrationRepository";

const exportRegistrationAction = async () => {
  // Entities
  const loadRegistrationRepo = new Mysql2RegistrationRepository(
    await mysqlConnect()
  );
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
