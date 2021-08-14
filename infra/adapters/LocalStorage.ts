import { promises as fsPromises } from "fs";
import { sep as directorySeparator } from "path";

import { IStorage } from "../../application/contracts/IStorage";

export default class LocalStorage implements IStorage {
  async store(
    fileName: string,
    path: string,
    content: string | Buffer
  ): Promise<boolean> {
    const controller = new AbortController();
    const { signal } = controller;

    const fullFileName = `${path}${directorySeparator}${fileName}`;

    const promise = fsPromises.writeFile(fullFileName, content, "utf-8");

    // Abort the request before the promise settles.
    // controller.abort();

    await promise;

    return true;
  }
}
