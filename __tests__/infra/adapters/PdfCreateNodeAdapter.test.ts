import Registration from "../../../domain/entities/Registration";
import Cpf from "../../../domain/value-objects/Cpf";
import Email from "../../../domain/value-objects/Email";
import PdfCreateNodeAdapter from "../../../infra/adapters/pdf-create-node-adapter/PdfCreateNodeAdapter";

const registration = new Registration(
  "Joao Vieira",
  new Email("joao.vieira@marttech.com.br"),
  new Cpf("41907122800"),
  new Date("25-03-1992"),
  new Date(),
  "0001"
);

const htmlPdfAdapter = new PdfCreateNodeAdapter();
htmlPdfAdapter.generate(registration);
