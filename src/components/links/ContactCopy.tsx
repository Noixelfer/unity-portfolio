import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

type ContactCopyProps = {
  value: string;
  label?: string;
  displayValue?: string;
  variant?: "inline" | "block";
};

export default function ContactCopy({
  value,
  label = "Contact",
  displayValue,
  variant = "inline",
}: ContactCopyProps) {
  const [copied, setCopied] = useState(false);
  const textToDisplay = displayValue ?? value;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "copy_contact", {
          event_category: "engagement",
          event_label: label.toLowerCase(),
        });
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(`Error copying ${label.toLowerCase()}:`, err);
    }
  };

  const isBlock = variant === "block";

  if (isBlock) {
    return (
      <button
        onClick={copyToClipboard}
        className="block w-full rounded-lg bg-primary px-6 py-3 text-center text-white transition hover:bg-secondary drop-shadow-[2px_2px_0_#0debd8]"
      >
        <div className="flex items-center justify-center gap-2 text-lg font-bold">
          <span>{label}</span>
          <FaRegCopy className="text-sm text-white/80" />
        </div>
        <div className="mt-1 text-sm font-medium text-white/85">
          {copied ? "Copied!" : textToDisplay}
        </div>
      </button>
    );
  }

  return (
    <div className="m-3 flex flex-wrap items-center justify-center gap-3 sm:m-4">
      <div className="text-center sm:text-left">
        <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
          {label}
        </div>
        <h1 className="text-lg font-medium">{textToDisplay}</h1>
      </div>
      <button
        onClick={copyToClipboard}
        className="flex cursor-pointer items-center gap-2 rounded-md border-none bg-primary px-2 py-1 text-sm font-bold hover:bg-secondary drop-shadow-[2px_2px_0_#0debd8]"
      >
        <FaRegCopy className="text-gray-300" />
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
