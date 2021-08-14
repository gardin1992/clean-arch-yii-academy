export default class RegistrationNotFoundException implements Error {
  name: string;
  message: string;
  stack?: string;

  constructor(message?: string) {
    this.name = "RegistrationNotFoundException";
    this.message = message;
    this.stack = (<any>new Error()).stack;
  }
}
