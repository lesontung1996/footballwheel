import { cn } from "@/lib/utils";
import Image from "next/image";

export default function FaqCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-xl border border-white/10 bg-fpl-1100/90 p-5 sm:p-6 md:p-7 break-inside-avoid",
      )}
    >
      <h3 className="flex items-center gap-3 text-lg font-bold leading-snug text-white sm:text-xl">
        <Image
          src="/images/football-wheel-logo.svg"
          alt={title}
          width={32}
          height={32}
        />
        <span>{title}</span>
      </h3>
      <div className="mt-4 space-y-3 text-body-sm text-white/75 [&_a]:font-medium [&_a]:text-sky-400 [&_a]:underline [&_a]:underline-offset-2 [&_a]:transition-colors hover:[&_a]:text-sky-300">
        {children}
      </div>
    </article>
  );
}
