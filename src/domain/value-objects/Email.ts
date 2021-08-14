const messageError = "Email inválido";

// EmailValueObject
export default class Email {
  private email: string;

  constructor(email: string) {
    if (!this.isValid(email)) throw new Error(messageError);
    this.email = email;
  }

  isValid = (email: string): boolean => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return re.test(email);
  };

  toString = () => this.email;
}
