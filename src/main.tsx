import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'
import { Root } from "./routes/Root";
import { HomePage } from "./pages/Home/HomePage";
import { BestSellerLoader } from "./components/ProductSection/ProductList";
import { ProductsPage } from "./pages/AllProductList/ProductsPage";
import { ProductDetailsPage } from "./pages/AllProductList/ProductDetailsPage";
import { categoryLoader } from "./components/CategorySection/categoryLoader";
import CategoryPage from "./pages/CategoryList/CategoriesPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        index: true,
        path: "/",
        loader:BestSellerLoader,
        element: <HomePage/>,
      },
      {
        path: "/products",
        element: <ProductsPage/>,
      },
      {
        path: "/products/:slug", // Dinamik URL
        element: <ProductDetailsPage/>,
      },
      {
        path: "/categories/:categoryId",
        element: <CategoryPage/>,
        loader: categoryLoader,
      },
    ],
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);



// /ojs-nutrition/images/categories/vector1.png