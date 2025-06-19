export interface UsersModel {
  id?: number;
  first_name?: string | null;
  last_name?: string | null;
  user_name?: string | null;
  email?: string;
  password?: string | undefined;

  created_at?: Date | null;
  updated_at?: Date | null;
  deleted_at?: Date | null;
}


