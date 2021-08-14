import Registration from "../../../src/domain/entities/Registration";
import Cpf from "../../../src/domain/value-objects/Cpf";
import Email from "../../../src/domain/value-objects/Email";
import PdfCreateNodeAdapter from "../../../src/infra/adapters/pdf-create-node-adapter/PdfCreateNodeAdapter";

const registration = new Registration()
  .setName("Joao Vieira")
  .setEmail(new Email("joao.vieira@marttech.com.br"))
  .setCpf(new Cpf("41907122800"))
  .setBirthDate(new Date("25-03-1992"))
  .setRegistrationAt(new Date())
  .setRegistrationNumber("41907122800");

const htmlPdfAdapter = new PdfCreateNodeAdapter();
htmlPdfAdapter
  .generate(registration, __dirname + "/", "example.pdf")
  .then((resp) => {
    console.log("Concluiu");
  })
  .catch((err) => {
    console.log("concluiu com falha", err.message);
  });
