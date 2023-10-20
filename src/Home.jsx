import Banner from "./Banner";
import BrandCards from "./BrandCards";
import PopularProducts from "./PopularProducts";
import Products from "./Products";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandCards></BrandCards>
            <PopularProducts></PopularProducts>
            <Products></Products>
        </div>
    );
};

export default Home;