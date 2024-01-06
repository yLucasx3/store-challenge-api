import { MongoClient, Db as Database } from "mongodb";

export class MongoProvider {
  private static database: Database;

  public static async connect(uri: string, dbName: string): Promise<void> {
    const client = new MongoClient(uri);
    await client.connect();

    this.database = client.db(dbName);
  }

  public static getDatabase(): Database {
    if (!this.database) {
      throw new Error(
        "Connection to MongoDB not established. Call connect() first."
      );
    }
    return this.database;
  }
}
