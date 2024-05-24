"use server";

import { revalidatePath, unstable_noStore } from "next/cache";
import { Record } from "./definitinons";
import { sql } from "@vercel/postgres";
import { redirect } from "next/dist/server/api-utils";

export async function createRecord(formData: FormData) {
  console.log(formData);

  const amountInCents = Number(formData.get("amount")) * 100;

  try {
    await sql`
      INSERT INTO RECORDS (id, amountInCents, time)
      VALUES (gen_random_uuid(), ${amountInCents}, NOW() AT TIME ZONE 'CCT')
      ON CONFLICT (id) DO NOTHING;
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to create record.',
    };
  }

  revalidatePath("/");
}

export async function getRecords() {
  unstable_noStore();

  try {
    const records = await sql`
      SELECT * FROM RECORDS ORDER BY time ASC;
    `

    console.log("Records fetched."); 
    console.log(records.rows);
    return records.rows;
  } catch (error) {
    console.error("Fetch records failed: ", error);
    throw error;
  }
}

export async function deleteRecord(id: string) {
  try {
    console.log("uuid is : " + id);
    
    await sql`DELETE FROM RECORDS WHERE id=${id};`

    console.log("Records deleted."); 
  } catch (error) {
    console.error("Fetch records failed: ", error);
    throw error;
  }

  revalidatePath('/');
}