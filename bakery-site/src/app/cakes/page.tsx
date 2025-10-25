import type { Metadata } from "next";

import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Signature Cakes | Velvet Crumb Bakery",
  description:
    "Explore layered cakes, chiffon clouds, and celebratory confections handcrafted at Velvet Crumb Bakery.",
};

export default async function CakesPage() {
  const cakes = await getProductsByCategory("cakes");

  return (
    <div className="container category-page">
      <header className="category-hero">
        <p className="section-eyebrow">Cake Collection</p>
        <h1>Signature Cakes</h1>
        <p>
          Each cake is built to order with seasonal produce, house-made preserves, and airy sponges.
          Customize layers, fillings, and garnishes for your celebration.
        </p>
      </header>

      <div className="product-grid-list category-grid">
        {cakes.map((cake) => (
          <ProductCard key={cake.id} product={cake} />
        ))}
      </div>
    </div>
  );
}
