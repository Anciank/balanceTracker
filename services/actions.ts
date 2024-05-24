"use server";

import { revalidatePath } from "next/cache";
import { Record } from "./definitinons";


let data: Record[] = [
  {
    id: 0,
    num: 10,
    time: new Date()
  }
];

export async function createRecord(formData: FormData) {
  console.log(formData);

  data.push({
    id: data.length,
    num: Number(formData.get("num")),
    time: new Date(),
  });

  revalidatePath('/');
}

export async function getData() {
  return data;
}
