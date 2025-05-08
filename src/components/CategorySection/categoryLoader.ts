import { API_BASE_URL } from "@/utils/contants";
import { LoaderFunctionArgs } from "react-router-dom";
import { ApiResponse } from "../ProductSection/ProductList";

export interface CategoryPageLoaderResult {
  result: ApiResponse;
  categoryName: string;
}

export async function categoryLoader({ params }: LoaderFunctionArgs): Promise<CategoryPageLoaderResult> {
  const categoryId = params.categoryId;

  try {
    // 1. Ürünleri çek
    const productsRes = await fetch(`${API_BASE_URL}/products?main_category=${categoryId}`);
    const result: ApiResponse = await productsRes.json();

    // 2. Tüm kategorileri çek
    const categoryRes = await fetch(`${API_BASE_URL}/categories`);
    const categoryData = await categoryRes.json();

    // 3. ID'ye göre kategori adı bul
    const category = categoryData.data.data.find((c: { id: string }) => c.id === categoryId);
    const categoryName = category?.name || "Kategori";

    return { result, categoryName };
  } catch (error) {
    console.error("Kategori verileri yüklenirken hata oluştu:", error);
    return {
      result: { status: "error", data: [] },
      categoryName: "Kategori",
    };
  }
}
