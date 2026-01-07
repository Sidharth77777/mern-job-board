"use client";

import { Toaster } from "react-hot-toast";

// Toaster
export default function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: "bg-card text-card-fg border border-border font-sans",
        style: {
          borderRadius: "0.5rem",
          padding: "1rem",
        },
        duration: 4000,
        success: {
          style: {
            background: "var(--color-primary)",
            color: "var(--color-primary-fg)",
          },
        },
        error: {
          style: {
            background: "var(--color-destructive)",
            color: "var(--color-destructive-fg)",
          },
        },
        loading: {
          style: {
            background: "var(--color-accent)",
            color: "var(--color-accent-fg)",
          },
        },
      }}
    />
  );
}
