import { IPresentation } from "../http/controllers/IPresentation";

/**
 * Faz a tradução dos dados para a View Model
 */
export default class ExportRegistrationPresenter implements IPresentation {
  /**
   * Aqui transforma os dados para a camada de fora
   *
   * @param data
   * @returns
   */
  output(data: any): string {
    return JSON.stringify(data);
  }
}
