import Image from "next/image";

import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card" id={`product-${product.id}`}>
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 45vw, 90vw"
          priority={product.featured}
        />
      </div>
      <div className="product-content">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </article>
  );
}
