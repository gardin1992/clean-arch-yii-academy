import { mysqlConnect } from "./configs/db";
import ExportRegistration from "./src/application/use-cases/export-registration/ExportRegistration";
import LocalStorage from "./src/infra/adapters/LocalStorage";
import PdfCreateNodeAdapter from "./src/infra/adapters/pdf-create-node-adapter/PdfCreateNodeAdapter";
import { ExportRegistrationControllerCli } from "./src/infra/cli/controller/ExportRegistrationControllerCLI";
import { ExportRegistrationControllerHttp } from "./src/infra/http/controllers/ExportRegistrationControllerHttp";
import {
  IHttpRequest,
  IHttpResponse,
} from "./src/infra/http/controllers/ports/http";
import ExportRegistrationPresenter from "./src/infra/presentations/ExportRegistrationPresenter";
import Mysql2RegistrationRepository from "./src/infra/repositories/mysql/Mysql2RegistrationRepository";

// const exportRegistrationActionCli = async (useCase: ExportRegistration) => {
//   const controllerCli = new ExportRegistrationControllerCli(useCase);
//   const outputCli = await controllerCli.handle();
//   console.log("outputCli salvo em: ", outputCli);
// };

const exportRegistrationAction = async () => {
  try {
    // Entities
    const loadRegistrationRepo = new Mysql2RegistrationRepository(
      await mysqlConnect()
    );
    const pdfExporter = new PdfCreateNodeAdapter();
    const storage = new LocalStorage();

    // Use case CLI
    const exportRegistrationUseCase = new ExportRegistration(
      loadRegistrationRepo,
      pdfExporter,
      storage
    );

    const request: IHttpRequest = {
      body: "",
    };

    const response: IHttpResponse = {
      body: "",
      statusCode: 400,
    };

    const controllerHttp = new ExportRegistrationControllerHttp(
      request,
      response,
      exportRegistrationUseCase
    );

    const presenter = new ExportRegistrationPresenter();

    const outputHttp = await controllerHttp.handle(presenter);
    console.log("outputHttp salvo em: ", outputHttp);

    process.exit();
  } catch (error) {
    console.log(error);
  }
};

exportRegistrationAction().finally();
