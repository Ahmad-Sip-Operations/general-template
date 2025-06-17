export interface VisibilityDM {
  id?: number;
  role_id?: number;
  role_name?: string;
  modules :{
    module_id?: number;
    module_name?: string;
    visibility?: number;
  }[]; 
}