require('dotenv').config({ path: '.env.development.local' });

const { db } = require("@vercel/postgres");
const { log, error } = require("console");

async function initDatabase(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
    console.log("Database extension imported.");
  } catch (error) {
    console.error("Error creating database extension:", error);
    throw error;
  }

  try {
    await client.sql`CREATE DATABASE BALANCETRACKER;`;
    console.log("Database created.");
  } catch (error) {
    console.error("Error creating database:", error);
    throw error;
  }

  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS RECORDS (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        amountInCents NUMERIC NOT NULL ,
        time TIMESTAMP NOT NULL
      );
    `;

    console.log("Table RECORDS created.");
  } catch (error) {
    console.error("Error creating table:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await initDatabase(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
