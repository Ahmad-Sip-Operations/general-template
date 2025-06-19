import bcrypt from "bcryptjs";

export const hashPassword = (plain: string) => {
    return bcrypt.hash(plain, 10);
};
