export interface IOutputBoundary {
  name?: string;
  email?: string;
  cpf?: string;
  birthDate?: string;
  registrationAt?: string;
  registrationNumber?: string;
}

export default class OutputBoundary {
  private name: string;
  private email: string;
  private cpf: string;
  private birthDate: string;
  private registrationAt: string;
  private registrationNumber: string;

  constructor(values: IOutputBoundary) {
    this.name = values.name ?? "";
    this.email = values.email ?? "";
    this.cpf = values.cpf ?? "";
    this.birthDate = values.birthDate ?? "";
    this.registrationAt = values.registrationAt ?? "";
    this.registrationNumber = values.registrationNumber ?? "";
  }

  getName = (): string => this.name;
  getEmail = (): string => this.email;
  getCpf = (): string => this.cpf;
  getBirthDate = (): string => this.birthDate;
  getRegistrationAt = (): string => this.registrationAt;
  getRegistrationNumber = (): string => this.registrationNumber;
}
