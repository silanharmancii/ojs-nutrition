import { useProductVariants } from '@/hooks/useProductVariants';
import { Product, ProductVariantSize } from '@/types';
import { API_BASE_URL, IMAGE_BASE_URL } from '@/utils/contants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function ProductDetailsPage() {
 const { slug } = useParams<{ slug: string }>();
 const [product, setProduct] = useState<Product | null>(null);
 const [isLoading, setIsLoading] = useState(true);
 const [quantity, setQuantity] = useState(1);
  const {
   selectedVariant,
   productAromas,
   productSizes,
   isSelectedAroma,
   selectAroma,
   selectSize,
   isSelectedSize,
   isSizeAvailable,
 } = useProductVariants(product?.variants || []);
 
  useEffect(() => {
   const fetchProductDetails = async () => {
     try {
       setIsLoading(true);
       const response = await fetch(`${API_BASE_URL}/products/${slug}`);
       const data = await response.json();
       setProduct(data.data);
     } catch (error) {
       console.error('Error fetching product:', error);
     } finally {
       setIsLoading(false);
     }
   };
    if (slug) {
     fetchProductDetails();
   }
 }, [slug]);
  if (isLoading) {
   return (
     <div className="flex justify-center items-center min-h-screen">
       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
     </div>
   );
 }
  if (!product || !selectedVariant) {
   return <div>Ürün bulunamadı.</div>;
 }
  return (
   <div className="container max-w-7xl mx-auto px-4 py-8">
     <div className="grid md:grid-cols-2 gap-8">
       {/* Product Image */}
       <div className="relative">
         <img 
           src={`${IMAGE_BASE_URL}${selectedVariant.photo_src}`} 
           alt={product.name}
           className="w-full"
         />
       </div>
        {/* Product Details */}
       <div className="flex flex-col space-y-6">
         <h1 className="text-2xl font-bold uppercase">{product.name}</h1>
         <p className="text-gray-600">{product.short_explanation}</p>
         
         {/* Rating */}
         <div className="flex items-center gap-2">
           <div className="flex">
             {[...Array(5)].map((_, index) => (
               <FontAwesomeIcon
                 key={index}
                 icon={faStar}
                 className={`${
                   index < Math.floor(product.average_star)
                     ? 'text-yellow-400'
                     : 'text-gray-300'
                 }`}
               />
             ))}
           </div>
           <span className="text-sm text-gray-600">
             {product.comment_count} Yorum
           </span>
         </div>
         <hr></hr>
          {/* Flavor Selection */}
         <div>
           <h3 className="font-semibold mb-3">AROMA:</h3>
           <div className="grid grid-cols-3 gap-3">
             {productAromas.map((aroma) => (
               <button
                 key={aroma}
                 onClick={() => selectAroma(aroma)}
                 className={`p-3 border rounded-md ${
                   isSelectedAroma(aroma)
                     ? 'border-blue-500 bg-blue-50'
                     : 'border-gray-300'
                 }`}
               >
                 {aroma}
               </button>
             ))}
           </div>
         </div>
          {/* Size Selection */}
         <div>
           <h3 className="font-semibold mb-3">BOYUT:</h3>
           <div className="grid grid-cols-3 gap-3">
             {productSizes.map((size: ProductVariantSize, index) => (
               <button
                 key={index}
                 onClick={() => selectSize(size)}
                 disabled={isSizeAvailable(size)}
                 className={`p-3 border rounded-md ${
                   isSelectedSize(size)
                     ? 'border-blue-500 bg-blue-50'
                     : isSizeAvailable(size)
                     ? 'border-gray-200 bg-gray-100 opacity-50'
                     : 'border-gray-300'
                 }`}
               >
                 <div className="font-bold">
                   {size.gram ? `${size.gram}g` : `${size.pieces} Adet`}
                 </div>
                 <div className="text-sm text-gray-600">
                   {size.total_services} Servis
                 </div>
               </button>
             ))}
           </div>
         </div>
          {/* Price and Add to Cart */}
         <div className="space-y-4">
           <div className="text-3xl font-bold">
             {selectedVariant.price.discounted_price ? (
               <div className="flex items-center gap-3">
                 <span className="text-red-500">
                   {selectedVariant.price.discounted_price} TL
                 </span>
                 <span className="text-gray-500 line-through text-xl">
                   {selectedVariant.price.total_price} TL
                 </span>
                 {selectedVariant.price.discount_percentage && (
                   <span className="text-sm text-red-500">
                     %{selectedVariant.price.discount_percentage} İndirim
                   </span>
                 )}
               </div>
             ) : (
               <span>{selectedVariant.price.total_price} TL</span>
             )}
             <div className="text-sm text-gray-600">
               {selectedVariant.price.price_per_servings} TL/Servis
             </div>
           </div>
            {/* Quantity and Add to Cart */}
           <div className="flex items-center gap-4">
             <div className="flex items-center border rounded-md">
               <button
                 onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                 className="px-4 py-2 border-r hover:bg-gray-100"
               >
                 -
               </button>
               <span className="px-4">{quantity}</span>
               <button
                 onClick={() => setQuantity(prev => prev + 1)}
                 className="px-4 py-2 border-l hover:bg-gray-100"
               >
                 +
               </button>
             </div>
             <button 
               className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
               disabled={!selectedVariant.is_available}
             >
               {selectedVariant.is_available ? 'SEPETE EKLE' : 'STOKTA YOK'}
             </button>
           </div>
         </div>
         <hr></hr>
       </div>
     </div>
   </div>
 );
}