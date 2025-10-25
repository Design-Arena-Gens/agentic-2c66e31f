import type { Metadata } from "next";

import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Handcrafted Chocolates | Velvet Crumb Bakery",
  description:
    "Discover bonbons, truffles, and caramel-filled chocolates crafted with single-origin couverture.",
};

export default async function ChocolatesPage() {
  const chocolates = await getProductsByCategory("chocolates");

  return (
    <div className="container category-page">
      <header className="category-hero">
        <p className="section-eyebrow">Chocolate Studio</p>
        <h1>Handcrafted Chocolates</h1>
        <p>
          Tempered by hand, painted with natural cocoa butter pigments, and filled with ganaches that
          spark delight in every bite.
        </p>
      </header>

      <div className="product-grid-list category-grid">
        {chocolates.map((chocolate) => (
          <ProductCard key={chocolate.id} product={chocolate} />
        ))}
      </div>
    </div>
  );
}
