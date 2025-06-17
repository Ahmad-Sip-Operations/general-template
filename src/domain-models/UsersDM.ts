// // import { RoleDM } from "./RoleDM";

// export interface UsersDM {
//   id?: number;
//   first_name?: string | null;
//   middle_name?: string | null;
//   last_name?: string | null;
//   dob?: string | null;
//   address?: string | null;
//   mobile_no?: string | null;
//   landline_no?: string | null;
//   city?: number;
//   country?: number;
//   postal_code?: string | null;
//   payroll?: string | null;
//   user_name?: string | null;
//   email?: string;
//   email_verified_at?: Date | null;
//   verified?: number | "0";
//   office_id?: number | null;
//   department_id?: number | null;
//   phone?: string | null;
//   avatar_location?: string | null;
//   password?: string | undefined;
//   password_changed_at?: Date | null;
//   last_login_at?: Date | null;
//   last_login_ip?: Date | null;
//   status?: string | "active";
//   created_by?: number | null;
//   updated_by?: number | null;
//   remember_token?: string | null;
//   theme_class_name?: string | null;
//   created_at?: Date | null;
//   updated_at?: Date | null;
//   deleted_at?: Date | null;
//   attempt?: number | null;
//   tries?: number | null;
//   user_has_role?: number | null;
//   userRole?: RoleDM;
//   team_lead_id? : number;

//   // Custom fields
//   country_name?: string | null;
//   city_name?: string | null;
//   is_active?: number;
//   role_name?: string | null;

//   reset_token_expiry?: number | null;
// }



export interface UsersDM {
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


