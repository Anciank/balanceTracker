"use client";

import { createRecord } from "@/services/actions";
import { useRef } from "react";

export default function AddBalance() {
  const ref = useRef<HTMLFormElement>(null);

  async function formHandler(event: React.FormEvent) {
    event.preventDefault();
    if (ref.current) {
      const formData = new FormData(ref.current);
      await createRecord(formData);
      ref.current.reset();
    }
  }

  return (
    <div className="">
      <form ref={ref} onSubmit={formHandler} className="flex flex-col justify-center">
        <input
          className="bg-slate-600 py-2 px-3 text-xl"
          name="amount"
          type="number"
          placeholder="Add Balance Record"
          autoComplete="off"
          autoFocus
        />
        <button type="submit" className="bg-blue-800 w-full hover:bg-blue-950 text-white py-1 text-xl">
          Add
        </button>
      </form>
    </div>
  );
}
