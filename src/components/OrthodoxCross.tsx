import { cn } from "@/lib/cn";

export function OrthodoxCross({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 48"
      className={cn("text-gold", className)}
      aria-hidden="true"
      fill="currentColor"
    >
      <rect x="14.2" y="2" width="3.6" height="44" rx="0.4" />
      <rect x="8" y="8" width="16" height="2.6" rx="0.3" />
      <rect x="4" y="16" width="24" height="3.2" rx="0.3" />
      <rect
        x="9"
        y="32"
        width="14"
        height="2.6"
        rx="0.3"
        transform="rotate(-28 16 33.3)"
      />
    </svg>
  );
}
