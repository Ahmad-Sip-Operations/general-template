import { db } from '@/lib/db';
import { UsersDM } from '@/domain-models/UsersDM';

export class UserRepository {
  static async getUserByEmail(email: string): Promise<UsersDM | null> {
    try {
      const [rows]: any = await db.query('SELECT * FROM users WHERE email = ?', [email]);
      return rows.length ? (rows[0] as UsersDM) : null;
    } catch (error: any) {
      if (error.code === 'ER_NO_SUCH_TABLE') {
        // Handle "table does not exist" error
        throw new Error("Table 'users' does not exist.");
      }

      // Optional: rethrow other errors
      throw error;
    }
  }
}
