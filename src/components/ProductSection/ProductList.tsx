import { useLoaderData } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { API_BASE_URL } from "@/utils/contants";


const PRODUCTS_POST_URL = API_BASE_URL + "/products/best-sellers";

export interface ProductData {
  id: string;
  slug:string;
  name: string;
  short_explanation: string;
  comment_count: number;
  average_star: number;
  price_info: {
    total_price: number;
    discounted_price: number;
    discount_percentage: number;
  };
  photo_src: string;
  main_category:string;
}

export interface ApiResponse {
  status: string;
  data: ProductData[];
}


export async function BestSellerLoader() {
  const response = await fetch(PRODUCTS_POST_URL);
  const result: ApiResponse = await response.json();


  return { result };
}

type loaderData = Awaited<ReturnType<typeof BestSellerLoader>>;

export default function ProductList() {

  const { result } = useLoaderData() as loaderData;


  return (
    <>
      <div className="container mx-auto w-full h-auto mb-2 max-w-7xl sm:max-w-screen p-4 flex-1 align-center justify-center mb-2">
        <h1 className="text-2xl font-bold mb-4 text-center p-4">ÇOK SATANLAR</h1>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-6 p-4">
          {result.data?.map((product, index) => (
            <ProductCard key={index} {...product} />

          ))}
        </div>
      </div>

    </>
  )
}