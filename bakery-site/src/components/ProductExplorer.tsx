"use client";

import { useMemo, useState } from "react";

import type { Product } from "@/types/product";
import { ProductCard } from "@/components/ProductCard";

interface ProductExplorerProps {
  products: Product[];
}

const categories = [
  { id: "all", label: "All Treats" },
  { id: "cakes", label: "Cakes" },
  { id: "chocolates", label: "Chocolates" },
];

export function ProductExplorer({ products }: ProductExplorerProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;

      if (!matchesCategory) return false;

      if (!normalizedQuery) return true;

      const haystack = `${product.name} ${product.description}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [products, query, activeCategory]);

  return (
    <section className="explorer">
      <div className="section-heading">
        <p className="section-eyebrow">Find your favorite</p>
        <h2>Search the bakery case</h2>
      </div>

      <form
        className="explorer-controls"
        role="search"
        aria-label="Search cake and chocolate menu"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="search" className="sr-only">
          Search products
        </label>
        <input
          id="search"
          type="search"
          placeholder="Search for flavors, textures, or ingredients..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoComplete="off"
        />
        <div className="explorer-tabs" role="radiogroup" aria-label="Filter by category">
          {categories.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                role="radio"
                aria-checked={isActive}
                className={`explorer-tab${isActive ? " is-active" : ""}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </form>

      <div className="product-grid-list explorer-grid" aria-live="polite">
        {filteredProducts.length === 0 ? (
          <p className="empty-state">
            No treats match your search yet. Try another flavor or explore a different category.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
}
