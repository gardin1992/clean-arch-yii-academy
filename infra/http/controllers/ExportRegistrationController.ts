import ExportRegistration from "../../../application/use-cases/export-registration/ExportRegistration";
import InputBoundary from "../../../application/use-cases/export-registration/InputBoundary";
import { IHttpRequest, IHttpResponse } from "./ports/http";

export class ExportRegistrationController {
  constructor(
    private request: IHttpRequest,
    private response: IHttpResponse,
    private useCase: ExportRegistration
  ) {}

  async handle(): Promise<string> {
    const input = new InputBoundary(
      "41907122800",
      "xpto.pdf",
      __dirname + "../../../../storage/registrations"
    );

    const output = await this.useCase.handle(input);
    return output.getFullFileName();
  }
}
