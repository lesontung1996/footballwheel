import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Football League with Friends — Free, Instant, No Sign-Up | Football Wheel",
  description:
    "Set up a round-robin football league with your mates in seconds. Live standings, automatic fixtures, zero accounts — everything runs right in your browser.",
  alternates: { canonical: "/league" },
};

export default function LeagueLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
