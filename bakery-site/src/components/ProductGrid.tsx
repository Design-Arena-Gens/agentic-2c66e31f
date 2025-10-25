import type { Product } from "@/types/product";
import { ProductCard } from "@/components/ProductCard";

interface ProductGridProps {
  title: string;
  products: Product[];
  highlightCategory?: string;
}

export function ProductGrid({
  title,
  products,
  highlightCategory,
}: ProductGridProps) {
  if (!products.length) {
    return null;
  }

  return (
    <section className="product-grid">
      <div className="section-heading">
        <p className="section-eyebrow">
          {highlightCategory ? `${highlightCategory} Selection` : "Our Favorites"}
        </p>
        <h2>{title}</h2>
      </div>
      <div className="product-grid-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
