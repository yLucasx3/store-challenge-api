export class User {
  public readonly id!: string;
  public displayName!: string;
  public email!: string;
  public password!: string | null;

  constructor(props: Omit<User, "id">) {
    Object.assign(this, props);
  }
}
