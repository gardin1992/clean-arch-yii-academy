// dados escalares
// dados como string, number, boolean
export default class InputBoundary {
  private registrationNumber: string;
  private pdfFileName: string;
  private path: string;

  constructor(registrationNumber: string, pdfFIleName: string, path: string) {
    this.registrationNumber = registrationNumber;
    this.pdfFileName = pdfFIleName;
    this.path = path;
  }

  public getRegistrationNumber = (): string => this.registrationNumber;

  public getPdfFileName = (): string => this.pdfFileName;
  public getPath = (): string => this.path;
}
