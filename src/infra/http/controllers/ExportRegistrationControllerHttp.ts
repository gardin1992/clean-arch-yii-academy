import ExportRegistration from "../../../application/use-cases/export-registration/ExportRegistration";
import InputBoundary from "../../../application/use-cases/export-registration/InputBoundary";
import OutputBoundary from "../../../application/use-cases/export-registration/OutputBoundary";
import { IPresentation } from "./IPresentation";
import { IHttpRequest, IHttpResponse } from "./ports/http";

/**
 * Controller faz apenas UMA ação. Não VARIAS ações
 * 1 controller para 1 useCase
 */
export class ExportRegistrationControllerHttp {
  constructor(
    private request: IHttpRequest,
    private response: IHttpResponse,
    private useCase: ExportRegistration
  ) {}

  async handle(presentation: IPresentation): Promise<string> {
    const input = new InputBoundary(
      "01234567890",
      "xpto.pdf",
      __dirname + "/../../../../storage/registrations"
    );

    const output = await this.useCase.handle(input);

    return presentation.output({
      fullFileName: output.getFullFileName(),
    });
  }
}
