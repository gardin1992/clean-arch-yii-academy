import Registration from "../../domain/entities/Registration";

// DTO para receber o data
export interface IExportRegistrationPdfExporter {
  generate(registration: Registration): Promise<string>;
}
