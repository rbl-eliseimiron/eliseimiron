"use client";

import { useRef, useState, type FormEvent } from "react";
import { X } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
      >
        Contact
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setStatus("idle")}
        className="m-auto w-full max-w-md rounded-2xl border border-border bg-background p-0 text-foreground backdrop:bg-black/50"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold">Hai să vorbim</h2>
          <button
            type="button"
            onClick={close}
            aria-label="Închide"
            className="text-muted-foreground hover:text-foreground"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-6 py-5">
          <Field label="Nume" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Subiect" name="subject" />

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium">
              Mesaj
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </div>

          {status === "success" && (
            <p className="text-sm text-accent">Mesaj trimis. Revin curând!</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500">A apărut o eroare. Încearcă din nou.</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {status === "submitting" ? "Se trimite..." : "Trimite mesajul"}
          </button>
        </form>
      </dialog>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
      />
    </div>
  );
}
