// dados escalares
// dados como string, number, boolean
export default class InputBoundary {
  private registrationNumber: string;

  constructor(registrationNumber: string) {
    this.registrationNumber = registrationNumber;
  }

  public getRegistrationNumber = (): string => {
    return this.registrationNumber;
  };
}
