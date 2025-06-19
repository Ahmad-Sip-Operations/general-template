import { DbConfigType } from '@/types/config/DbConfigType';

export interface AuthCredentialsDM {
    username: string;
    password: string;
    tableName: string;
    dbConfig: DbConfigType;
}
