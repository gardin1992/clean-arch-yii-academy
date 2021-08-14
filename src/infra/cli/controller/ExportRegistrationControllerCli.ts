import ExportRegistration from "../../../application/use-cases/export-registration/ExportRegistration";
import InputBoundary from "../../../application/use-cases/export-registration/InputBoundary";

/**
 * Controller faz apenas UMA ação. Não VARIAS ações
 * 1 controller para 1 useCase
 */
export class ExportRegistrationControllerCli {
  constructor(private useCase: ExportRegistration) {}

  async handle(): Promise<string> {
    const input = new InputBoundary(
      "01234567890",
      "xpto.pdf",
      __dirname + "/../../../../storage/registrations"
    );

    const output = await this.useCase.handle(input);
    return output.getFullFileName();
  }
}
