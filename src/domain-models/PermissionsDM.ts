export interface PermissionsDM {
    id?: number;
    role_id?: number;
    role_name?: string;
    parent_module_id?: number;
    parent_module_name?: string;
    can_create?: number;
    can_read?: number;
    can_edit?: number;
    can_delete?: number;
    sections?: {
        section_module_id?: number;
        section_module_name?: string;
        children?: {
            id?: number;
            child_module_id?: number;
            child_module_name?: string;
            can_create: number;
            can_read: number;
            can_edit: number;
            can_delete: number;
        }[];
    }[];
}
