import fs from "fs";
import path from "path";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { hashPassword } from "@/utils/hash";

dotenv.config();

const runSQLScript = async () => {
  const sqlPath = path.resolve(__dirname, "../scripts/register/register.sql");
  let sql = fs.readFileSync(sqlPath, "utf8");

  // Dynamically hash the plaintext password
  const plainPassword = "123";
  const hashedPassword = await hashPassword(plainPassword); // use utility

  // Replace the placeholder in SQL with the hashed password
  sql = sql.replace("__HASHED_PASSWORD__", hashedPassword);

  try {
    const connection = await mysql.createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      multipleStatements: true,
    });

    await connection.query(sql);
    console.log("✅ register.sql executed with bcrypt password.");
    await connection.end();
  } catch (error) {
    console.error("❌ Error executing register.sql:", error);
  }
};

runSQLScript();
