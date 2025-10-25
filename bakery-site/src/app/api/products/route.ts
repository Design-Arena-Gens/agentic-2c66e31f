import { NextResponse } from "next/server";

import {
  getAllProducts,
  getProductsByCategory,
  searchProducts,
} from "@/lib/products";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const query = searchParams.get("q");

  let products;

  if (query) {
    products = await searchProducts(query);
  } else if (category === "cakes" || category === "chocolates") {
    products = await getProductsByCategory(category);
  } else {
    products = await getAllProducts();
  }

  return NextResponse.json({ products });
}
