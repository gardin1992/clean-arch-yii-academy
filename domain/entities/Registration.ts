import Cpf from "../value-objects/Cpf";
import Email from "../value-objects/Email";

export default class Registration {
  constructor(
    public name: string,
    public email: Email,
    public cpf: Cpf,
    public birthDate: Date,
    public registrationAt: Date,
    public registrationNumber: string
  ) {}
}
