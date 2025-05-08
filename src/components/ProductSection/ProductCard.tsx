import { ProductData } from "./ProductList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "@/utils/contants";


export function ProductCard(props: ProductData) {

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span key={index}>
        <FontAwesomeIcon
          icon={index < Math.round(rating) ? faStarSolid : faStarRegular}
          className={index < Math.round(rating) ? "text-yellow-400" : "text-gray-300"}
        />
      </span>
    ));
  };

  const { price_info } = props;
  const hasDiscount = price_info.discount_percentage > 0;
  return (
    <>
      <Link to={`/products/${props.slug}`} className="block">
      <div className="relative uppercase flex flex-col h-full">
        {/* İndirim Oranı */}
        {hasDiscount && (
          <div className="absolute flex flex-col top-0 right-0 bg-red-500 text-white px-1 text-center">
            <span className="font-bold text-base"> %{price_info.discount_percentage}</span>
            <span className="text-[10px]"> İndirim</span>
          </div>
        )}
        <img
          src={`${IMAGE_BASE_URL}${props.photo_src}`}
          alt={props.name}
          className="w-full aspect-[3/3] object-cover"
        />
        <div className="flex flex-col flex-1 items-center justify-between text-center p-4">
          <h5 className="text-black font-semibold py-1 w-full">{props.name}</h5>
          <span className="text-gray-500 text-sm w-full">{props.short_explanation}</span>
          <div className="flex items-center justify-center mb-2 w-full">
            {renderStars(props.average_star)}

          </div>
          <div className="flex gap-2 items-center">

            {hasDiscount ? (
              <div className="flex gap-2 items-center">
                <span className="text-red-500 font-bold">
                  {price_info.discounted_price} TL
                </span>
                <span className="text-gray-500 line-through text-sm">
                  {price_info.total_price} TL
                </span>
              </div>
            ) : (
              <span className="font-bold">{price_info.total_price} TL</span>
            )}
          </div>
        </div>
      </div>
      </Link>

    </>
  )
}

