export class User {
  public readonly id: string;
  public name: string;
  public email: string;
  public password?: string | null;
  public image?: string | null;
  public providerAccount?: string | null;

  constructor(props: Omit<User, "id">) {
    Object.assign(this, props);
  }
}
