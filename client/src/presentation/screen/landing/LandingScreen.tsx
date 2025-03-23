import Header from "../../components/header/Header";
import CategoryCarousel from "../../components/categoryCarousel/CategoryCarousel";
import styles from './LandingScreen.module.css'
import HeroSlide from "../../components/heroSlide/HeroSlide";
import Footer from "../../components/footer/Footer";
import ProductCell from "../../../ui/styles/productCell/ProductCell";
import ProductsBestsellers from "../../components/productsBestsellers/ProductsBestsellers";
import ProductsBestDeals from "../../components/productsBestDeals/ProductsBestDeals";
import ProductsNew from "../../components/productsNew/ProductsNew";
import TopNavBar from "../../components/topNavBar/TopNavBar";
export default function LandingScreen() {
    console.log("✅ ENV:", import.meta.env.VITE_API_URL);

    return (
        <div className={styles.landingScreenContainer}>
            <TopNavBar/>
            <Header/>
            <HeroSlide/>
            <CategoryCarousel/>
            <ProductsBestsellers/>
            <ProductsBestDeals/>
            <ProductsNew/>
            <Footer/>
        </div>
    )
}