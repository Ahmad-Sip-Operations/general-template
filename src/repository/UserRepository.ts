import mysql from 'mysql2/promise';
import { UsersModel } from '@/models/user/UserModel';
import { DbConfigType } from '@/types/config/DbConfigType';

export class UserRepository {
  static async getUserByEmail(
    email: string,
    tableName: string,
    dbConfig: DbConfigType
  ): Promise<UsersModel | null> {
    let connection;

    try {
      connection = await mysql.createConnection(dbConfig);
      const [rows]: any = await connection.query(
        `SELECT * FROM \`${tableName}\` WHERE email = ?`,
        [email]
      );

      return rows.length ? (rows[0] as UsersModel) : null;

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
