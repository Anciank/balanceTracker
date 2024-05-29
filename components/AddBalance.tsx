"use client";

import { createRecord } from "@/services/actions";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { useRef, useState } from "react";

export default function AddBalance() {
  const [pending, setPending] = useState(false);
  const ref = useRef<HTMLFormElement>(null);

  async function formAction(event: React.FormEvent) {
    event.preventDefault(); // Prevent the default form submission
    if (ref.current) {
      const formData = new FormData(ref.current);
      setPending(true);

      try {
        if (formData) {
          await createRecord(formData);
        }
        if (ref.current) {
          ref.current.reset();
        }
      } catch (error) {
        console.error("Error creating record:", error);
      } finally {
        setPending(false);
      }
    }
  }

  return (
    <div className="mt-4">
      <form
        ref={ref}
        onSubmit={formAction}
        className="flex flex-col justify-center gap-2"
      >
        <Input
          name="amount"
          label="Price"
          placeholder="0.00"
          labelPlacement="inside"
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">¥</span>
            </div>
          }
          autoFocus
          pattern="^[0-9+\-*\/\s]*$"
        />
        <Button color="primary" radius="sm" isLoading={pending} type="submit">
          {pending ? "Adding" : "Add"}
        </Button>
      </form>
    </div>
  );
}
