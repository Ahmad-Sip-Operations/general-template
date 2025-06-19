import bcrypt from 'bcryptjs';
import { signToken } from '@/lib/jwt';
import { UserRepository } from '@/repository/UserRepository';

import { AuthCredentialsDM } from '@/domain-models/auth/AuthCredentialsDM';
import { UsersModel } from '@/models/user/UserModel';

export class AuthService {
    static async login({
        username,
        password,
        tableName,
        dbConfig,
    }: AuthCredentialsDM) {
        // Validate required inputs
        if (!username || !password || !tableName || !dbConfig) {
            throw new Error('Missing required fields or Database Information!');
        }

        // Get user from repository
        const user: UsersModel | null = await UserRepository.getUserByEmail(
            username,
            tableName,
            dbConfig
        );

        // Check if user exists and password matches
        const isPasswordValid = user && user.password
            ? await bcrypt.compare(password, user.password)
            : false;

        if (!user || !isPasswordValid) {
            throw new Error('Invalid credentials');
        }

        // Sign JWT
        const token = await signToken({ id: user.id, username: user.email });

        // Return minimal structured data (without using separate type)
        return {
            token,
            user_name: `${user.first_name} ${user.last_name}`,
            user_id: user.id,
            email: user.email,
        };
    }
}
