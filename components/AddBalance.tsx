"use client";

import { createRecord } from "@/services/actions";
import { useRef } from "react";

export default function AddBalance() {
  const ref = useRef(null);

  async function formHandler(event: React.FormEvent) {
    event.preventDefault;
    const formData = new FormData(ref.current);
    await createRecord(formData);
    ref.current.reset();
  }

  return (
    <div className="">
      <form ref={ref} action={formHandler} className="flex flex-col">
        <input
          className="bg-slate-600 "
          name="num"
          type="text"
          placeholder="Add Balance Record"
        />
        <button type="submit" className="bg-blue-800 w-full">
          Add
        </button>
      </form>
    </div>
  );
}
