import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — Lunor Hair Extensions",
  description: "Premium extension care: Wash Bag and Detangler Serum. Crafted for extension perfection.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
