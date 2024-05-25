"use server";

import { revalidatePath, unstable_noStore } from "next/cache";
import { Record } from "./definitions";
import { QueryResultRow, sql } from "@vercel/postgres";

export async function createRecord(formData: FormData) {
  console.log(formData);

  // Function to safely evaluate a mathematical expression
  const evaluateExpression = (expression: string) => {
    try {
      // Use the Function constructor to create a function from the expression
      const fn = new Function(`return ${expression}`);
      // Call the function to evaluate the expression
      return fn();
    } catch (error) {
      console.error("Error evaluating expression:", error);
      return null; // Return null or handle the error as needed
    }
  };
  const toEval = formData.get("amount")?.toString();
  const amountInCents = toEval ? Number(evaluateExpression(toEval)) * 100 : 0;

  try {
    await sql`
      INSERT INTO RECORDS (id, amountInCents, time)
      VALUES (gen_random_uuid(), ${amountInCents}, NOW() AT TIME ZONE 'CCT')
      ON CONFLICT (id) DO NOTHING;
    `;
  } catch (error) {
    return {
      message: "Database Error: Failed to create record.",
    };
  }

  revalidatePath("/");
}

export async function getRecords() {
  unstable_noStore();

  try {
    const records = await sql`
      SELECT * FROM RECORDS ORDER BY time DESC;
    `;

    console.log("Records fetched.");

    const rt: Record[] = records.rows.map((item) => {
      
      return {
        id: item.id as string,
        amountInCents: item.amountincents / 100 as number,
        time: new Date(item.time),
      };
    });

    console.log(rt);
    

    return rt;
  } catch (error) {
    console.error("Fetch records failed: ", error);
    throw error;
  }
}

export async function deleteRecord(id: string) {
  try {
    console.log("uuid is : " + id);

    await sql`DELETE FROM RECORDS WHERE id=${id};`;

    console.log("Records deleted.");
  } catch (error) {
    console.error("Fetch records failed: ", error);
    throw error;
  }

  revalidatePath("/");
}
