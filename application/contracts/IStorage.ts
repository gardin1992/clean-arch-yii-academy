export interface IStorage {
  // cria e armazena o arquivo
  store(fileName: string, path: string, content: string): boolean;
}
