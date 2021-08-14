//Required package
import pdf from "pdf-creator-node";
import { promises as fsPromise } from "fs";

import { IExportRegistrationPdfExporter } from "../../../application/contracts/IExportRegistrationPdfExporter";
import Registration from "../../../domain/entities/Registration";
import { PROJECT_DIR } from "../../../settings";

export default class PdfCreateNodeAdapter
  implements IExportRegistrationPdfExporter
{
  private templateHtmlPath = __dirname + "/template.html";

  private options = {
    format: "Letter",
    orientation: "portrait",
  };

  private pdfData: any;

  async generate(registration: Registration): Promise<string> {
    this.pdfData = registration;
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
      path: PROJECT_DIR + "/storage/output.pdf",
      type: "",
    };

    const createdPdf = await pdf.create(document, this.options);

    return await fsPromise.readFile(createdPdf.filename, "utf8");
  };
}
