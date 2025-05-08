import { ProductCard } from "@/components/ProductSection/ProductCard";
import { ApiResponse } from "@/components/ProductSection/ProductList";
import { useLoaderData } from "react-router-dom";

type LoaderData = {
  result: ApiResponse;
  categoryName: string;
};

export default function CategoryPage() {
  const { result, categoryName } = useLoaderData() as LoaderData;

  return (
    <div className="container mx-auto w-full h-auto max-w-7xl p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        {categoryName.toUpperCase()}
      </h1>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-6">
        {result.data?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
