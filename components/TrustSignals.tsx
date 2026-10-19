import { CheckIcon } from "@/components/icons";
import { trustSignals } from "@/lib/site";

export function TrustSignals({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-2 text-[15px] font-semibold ${className}`}>
      {trustSignals.map((signal) => (
        <li key={signal} className="flex items-center gap-1.5">
          <CheckIcon className="size-5 shrink-0 text-brand" />
          {signal}
        </li>
      ))}
    </ul>
  );
}
