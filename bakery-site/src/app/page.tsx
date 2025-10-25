import { HeroSlider } from "@/components/HeroSlider";
import { ProductExplorer } from "@/components/ProductExplorer";
import { ProductGrid } from "@/components/ProductGrid";
import {
  getAllProducts,
  getFeaturedProducts,
  getProductsByCategory,
} from "@/lib/products";

export default async function Home() {
  const [featured, cakes, chocolates, allProducts] = await Promise.all([
    getFeaturedProducts(),
    getProductsByCategory("cakes"),
    getProductsByCategory("chocolates"),
    getAllProducts(),
  ]);

  return (
    <>
      <HeroSlider slides={featured} />
      <div className="container">
        <ProductGrid
          title="Signature Cakes"
          products={cakes.slice(0, 3)}
          highlightCategory="Cake"
        />
        <ProductGrid
          title="Handcrafted Chocolates"
          products={chocolates.slice(0, 3)}
          highlightCategory="Chocolate"
        />
        <ProductExplorer products={allProducts} />
      </div>
    </>
  );
}
