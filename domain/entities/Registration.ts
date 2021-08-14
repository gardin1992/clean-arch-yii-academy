import Cpf from "../value-objects/Cpf";
import Email from "../value-objects/Email";

// Deixar o dominio ricos
// nao apenas getters and setters
export default class Registration {
  private name: string;
  private email: Email;
  private cpf: Cpf;
  private birthDate: Date;
  private registrationAt: Date;
  private registrationNumber: string;

  public getName(): string {
    return this.name;
  }

  public setName(name: string): Registration {
    this.name = name;
    return this;
  }

  public getEmail(): Email {
    return this.email;
  }

  public setEmail(email: Email): Registration {
    this.email = email;
    return this;
  }

  public getCpf(): Cpf {
    return this.cpf;
  }

  public setCpf(cpf: Cpf): Registration {
    this.cpf = cpf;
    return this;
  }

  public getBirthDate(): Date {
    return this.birthDate;
  }

  public setBirthDate(birthDate: Date): Registration {
    this.birthDate = birthDate;
    return this;
  }

  public getRegistrationAt(): Date {
    return this.registrationAt;
  }

  public setRegistrationAt(registrationAt: Date): Registration {
    this.registrationAt = registrationAt;
    return this;
  }

  public getRegistrationNumber(): string {
    return this.registrationNumber;
  }

  public setRegistrationNumber(registrationNumber: string): Registration {
    this.registrationNumber = registrationNumber;
    return this;
  }
}
