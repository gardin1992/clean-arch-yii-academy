import LocalStorage from "../../../infra/adapters/LocalStorage";
import { sep as directorySeparator } from "path";
import { promises as fsPromises } from "fs";

const teste = async () => {
  const storage = new LocalStorage();

  const filename = "local-storage-test.pdf";
  const path = __dirname + directorySeparator + "../../storage";
  const content = await fsPromises.readFile(
    __dirname + directorySeparator + "../../example.pdf"
  );

  const respStorage = await storage.store(filename, path, content);

  console.log("complete storage", respStorage);
};

teste().finally();
