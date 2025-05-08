import { ProductCard } from "@/components/ProductSection/ProductCard";
import { ProductData } from "@/components/ProductSection/ProductList";
import { useEffect, useState } from "react";

interface ProductTemplateProps {
  title?: string;
  apiUrl: string;
  className?: string;
}

interface ApiResponse {
  data: ProductData[];
  // Add other response fields if they exist
}
export function ProductTemplate({ title, apiUrl, className = "" }: ProductTemplateProps) {

  const [products, setProducts] = useState<ProductData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: ApiResponse = await response.json();

        // Check if result.data exists and is an array
        if (Array.isArray(result.data)) {
          setProducts(result.data);
        } else {
          console.error("Invalid data format:", result);
          setError("Veri formatında hata oluştu.");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Ürünler yüklenirken bir hata oluştu.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [apiUrl]);
  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }
  return (
    <div className="container mx-auto max-w-7xl px-4 mt-20">
      {title && (
        <h2 className="text-4xl font-bold mb-6 text-center uppercase">
          {title}
        </h2>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 ${className}`}>
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product, index) => (
              <ProductCard key={product.id || index} {...product} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              Ürün bulunamadı.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Example usage in ProductsPage
export function ProductsPage() {
  return (
    <ProductTemplate
      title="Tüm Ürünler"
      apiUrl="https://fe1111.projects.academy.onlyjs.com/api/v1/products"
    />
  );
}
