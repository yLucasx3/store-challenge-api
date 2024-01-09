export interface IPasswordProvider {
  hash: (password: string, options: any) => Promise<string>;
  compare: (password: string, hashedPassword: string) => Promise<boolean>;
}
