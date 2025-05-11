import Banner from "../components/Banner";
import CategoriesSection from "../components/CategoriesSection";
import CraftsItemSection from "../components/CraftsItemSection";
import NewsletterSection from "../components/NewsletterSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CraftsItemSection></CraftsItemSection>
            <CategoriesSection></CategoriesSection>
            <NewsletterSection></NewsletterSection>
            
        </div>
    );
};

export default Home;