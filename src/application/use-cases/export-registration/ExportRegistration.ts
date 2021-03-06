import { sep as directorySeparator } from "path";

// receber uma interface se necessário

import { ILoadRegistrationRepository } from "../../../domain/repositories/ILoadRegistrationRepository";
import Cpf from "../../../domain/value-objects/Cpf";
import { IExportRegistrationPdfExporter } from "../../contracts/IExportRegistrationPdfExporter";
import { IStorage } from "../../contracts/IStorage";
import InputBoundary from "./InputBoundary";
import OutputBoundary, { IOutputBoundary } from "./OutputBoundary";

// porém é aceitavel criar a classe concreta
export default class ExportRegistration {
  private repository: ILoadRegistrationRepository;
  private pdfExporter: IExportRegistrationPdfExporter;
  private storage: IStorage;

  constructor(
    repository: ILoadRegistrationRepository,
    pdfExporter: IExportRegistrationPdfExporter,
    storage: IStorage
  ) {
    this.repository = repository;
    this.pdfExporter = pdfExporter;
    this.storage = storage;
  }

  // método de executar o usecase
  async handle(input: InputBoundary): Promise<OutputBoundary> {
    const cpf = new Cpf(input.getRegistrationNumber());
    const pdfFileName = input.getPdfFileName();
    const path = input.getPath();

    // faz a consulta no banco
    const registration = await this.repository.loadByRegistrationNumber(cpf);
    const fileContent = await this.pdfExporter.generate(
      registration,
      path,
      pdfFileName
    );

    await this.storage.store(
      input.getPdfFileName(),
      input.getPath(),
      fileContent
    );

    return new OutputBoundary(
      `${input.getPath()}${directorySeparator}${input.getPdfFileName()}`
    );
  }
}
