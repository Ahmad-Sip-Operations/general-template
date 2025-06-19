import mysql from 'mysql2/promise';
import { UsersDM } from '@/models/user/UserModel';
import { DbConfigDM } from '@/types/config/DbConfigType';

export class UserRepository {
  static async getUserByEmail(
    email: string,
    tableName: string,
    dbConfig: DbConfigDM
  ): Promise<UsersDM | null> {
    let connection;

    try {
      connection = await mysql.createConnection(dbConfig);
      const [rows]: any = await connection.query(
        `SELECT * FROM \`${tableName}\` WHERE email = ?`,
        [email]
      );

      return rows.length ? (rows[0] as UsersDM) : null;

    } catch (error: any) {
      if (error.code === 'ER_NO_SUCH_TABLE') {
        throw new Error(`Table '${tableName}' does not exist.`);
      }
      throw error;
    } finally {
      if (connection) {
        await connection.end();
      }
    }
  }
}
