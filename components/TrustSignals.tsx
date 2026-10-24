import { CurveMark } from "@/components/icons";
import { trustSignals } from "@/lib/site";

export function TrustSignals({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 font-semibold ${className}`}>
      {trustSignals.map((signal) => (
        <li key={signal} className="flex items-center gap-2">
          <CurveMark className="size-5 shrink-0" />
          {signal}
        </li>
      ))}
    </ul>
  );
}
