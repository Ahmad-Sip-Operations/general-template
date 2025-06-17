import { db } from '@/lib/db';
import { UsersDM } from '@/domain-models/UsersDM';

export class UserRepository {
  static async getUserByEmail(email: string): Promise<UsersDM | null> {
    
    const [rows]: any = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows.length ? rows[0] as UsersDM : null;
  }
}