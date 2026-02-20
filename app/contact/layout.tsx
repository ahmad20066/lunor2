import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Lunor Hair Extensions",
  description: "Get in touch with Lunor. Product inquiries, collaborations, and more.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
