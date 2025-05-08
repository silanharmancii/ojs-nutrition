
import { Banner } from "@/components/BannerSection/Banner";
import Categories from "@/components/CategorySection/Categories";
import CustomerReviews from "@/components/SlideSection/BlizerSlide";
import { Footer } from "@/components/FooterSection/Footer";
import ProductList from "@/components/ProductSection/ProductList";
import { Slide } from "@/components/SlideSection/Slide";

export function HomePage(){

    return (
        <>
            <Banner></Banner>
            <Categories></Categories>
            <ProductList></ProductList>
            <Slide></Slide>
            <CustomerReviews></CustomerReviews>
            <Footer></Footer>
        </>
        
    )
}