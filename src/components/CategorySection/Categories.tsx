import React, { useEffect, useState } from "react";
import { fetchCategories, CategoryData } from "./fetchCategories";
import { Link } from "react-router-dom";

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      const data = await fetchCategories();
      setCategories(data);
      setIsLoading(false);
    }

    loadCategories();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container mx-auto text-white w-full h-full max-w-7xl lg:p-4 py-3">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-6 gap-2 px-2">
          {categories.map((category) => (
            <div key={category.id} className="relative group">
              <img
                src={category.image}
                alt={category.name}
                className=" w-full aspect-[16/9] rounded-md object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-end pr-4">
                <h5 className="text-black lg:text-xl md:text-xl text-xs font-semibold">
                  {category.name}
                </h5>
                <Link
                  to={`/categories/${category.id}`}
                  className="mt-4 text-white lg:text-lg md:text-lg text-xs font-bold bg-black py-1 lg:px-6 md:px-6 px-2 rounded"
                >
                  İncele
                </Link>
              </div>
            </div>
          ))}
          <div className="relative group">
            <img
              src="/public/images/category/Katman 1.png"
              className=" w-full aspect-[16/9] rounded-md object-cover z-0"
            />
            <img
              src="/public/images/category/tum-urunler.png"
              className="absolute
    top-5 left-2 w-16 max-w-[64px] 
    sm:top-5 sm:left-8 sm:w-20 sm:max-w-[88px]
    md:top-12 md:left-4 md:w-20 md:max-w-[160px]
    xl:top-10 xl:left-10 xl:w-40 xl:max-w-[168px]
    h-auto object-contain z-10"
              alt="overlay icon"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-end pr-4">
              <h5 className="text-black lg:text-xl md:text-xl text-xs font-semibold">
                Tüm Kategoriler
              </h5>
              <Link
                to={"/products"}
                className="mt-4 text-white lg:text-lg md:text-lg text-xs font-bold bg-black py-1 lg:px-6 md:px-6 px-2 rounded"
              >
                İncele
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
