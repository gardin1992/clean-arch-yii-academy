import { mysqlConnect } from "./configs/db";
import ExportRegistration from "./src/application/use-cases/export-registration/ExportRegistration";
import LocalStorage from "./src/infra/adapters/LocalStorage";
import PdfCreateNodeAdapter from "./src/infra/adapters/pdf-create-node-adapter/PdfCreateNodeAdapter";
import { ExportRegistrationController } from "./src/infra/http/controllers/ExportRegistrationController";
import {
  IHttpRequest,
  IHttpResponse,
} from "./src/infra/http/controllers/ports/http";
import Mysql2RegistrationRepository from "./src/infra/repositories/mysql/Mysql2RegistrationRepository";

const exportRegistrationAction = async () => {
  try {
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
    console.log("Arquivo salvo em: ", output);

    process.exit();
  } catch (error) {
    console.log(error);
  }
};

exportRegistrationAction().finally();
