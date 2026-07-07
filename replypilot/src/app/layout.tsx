import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReplyPilot — AI review replies for local businesses",
  description:
    "Turn every Google review into revenue. ReplyPilot drafts on-brand, professional replies to your reviews in seconds and helps you collect more 5-star ratings on autopilot.",
  openGraph: {
    title: "ReplyPilot — AI review replies for local businesses",
    description:
      "Draft on-brand replies to every review in seconds and collect more 5-star ratings on autopilot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
