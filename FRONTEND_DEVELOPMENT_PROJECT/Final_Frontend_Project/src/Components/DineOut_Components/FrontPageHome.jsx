import HeaderDineout from "./HeaderDineout";
import FrontPage from "./FrontPage";
import RestaurantHeader from "../RestaurantHeader";
import Footer from "../Footer";

export default function FrontPageHome() {
    return(
        <>
        <RestaurantHeader></RestaurantHeader>
        <HeaderDineout></HeaderDineout>
        <FrontPage></FrontPage>
        <Footer></Footer>
        </>
    )
}