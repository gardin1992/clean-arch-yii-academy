//Required package
import pdf from "pdf-creator-node";
import { promises as fsPromise } from "fs";

import { IExportRegistrationPdfExporter } from "../../../application/contracts/IExportRegistrationPdfExporter";
import Registration from "../../../domain/entities/Registration";
import { PROJECT_DIR } from "../../../../settings";

export default class PdfCreateNodeAdapter
  implements IExportRegistrationPdfExporter
{
  private templateHtmlPath = __dirname + "/template.html";

  private options = {
    format: "Letter",
    orientation: "portrait",
  };

  private pdfData: any;
  private path: string;
  private fileName: string;

  async generate(
    registration: Registration,
    path: string,
    fileName: string
  ): Promise<string> {
    this.pdfData = registration;
    this.path = path;
    this.fileName = fileName;
    return await this.createPdfFile();
  }

  private createPdfFile = async () => {
    // Read HTML Template
    const html = await fsPromise.readFile(this.templateHtmlPath, "utf8");

    const document = {
      html: html,
      data: {
        ...this.pdfData,
      },
      path: `tmp/${this.fileName}`,
      type: "",
    };

    const createdPdf = await pdf.create(document, this.options);

    return await fsPromise.readFile(createdPdf.filename, "binary");
  };
}
