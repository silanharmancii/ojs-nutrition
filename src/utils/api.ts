import { API_BASE_URL } from "./contants";


const PRODUCTS_PER_PAGE = 12;

export async function getAllProducts(page: number = 1) {
 const offset = (page - 1) * PRODUCTS_PER_PAGE;
 const url = `${API_BASE_URL}/products?limit=${PRODUCTS_PER_PAGE}&offset=${offset}`;
 
 try {
   const response = await fetch(url);

   if (!response.ok) {
     throw new Error('Network response was not ok');
   }

   return await response.json();

 } catch (error) {
    
   console.error('Error fetching products:', error);
   throw error;
 }

}


export async function getProductDetails(slug: string) {
 try {
   const response = await fetch(`${API_BASE_URL}/products/${slug}`);
   if (!response.ok) {
     throw new Error('Product not found');
   }
   const data = await response.json();
   return data;
 } catch (error) {
   console.error('Error fetching product details:', error);
   throw error;
 }
}

