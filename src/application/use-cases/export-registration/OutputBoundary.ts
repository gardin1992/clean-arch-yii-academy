export interface IOutputBoundary {
  name?: string;
  email?: string;
  cpf?: string;
  birthDate?: string;
  registrationAt?: string;
  registrationNumber?: string;
}

export default class OutputBoundary {
  private fullFileName: string;

  constructor(fullFileName: string) {
    this.fullFileName = fullFileName;
  }

  getFullFileName = (): string => this.fullFileName;
}
