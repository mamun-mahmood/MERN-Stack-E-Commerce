import "./App.css";
import FlashSell from "./Components/FlashSell/FlashSell";
import Header from "./Components/Header/Header";
import Midsection from "./Components/Midsection/Midsection";
import SecondSection from "./Components/SecondSection/SecondSection";
import ServiceCategory from "./Components/ServiceCategory/ServiceCategory";
import TrendingLiveStream from "./Components/TrendingLiveStream/TrendingLiveStream";
import TrendingProducts from "./Components/TrendingProducts/TrendingProducts";
import TrendingService from "./Components/TrendingService/TrendingService";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./Components/Signup/SignUp";
import ProductDetailsPage from "./Components/ProductDetails/ProductDetailsPage";
import Secondbar from "./Components/Header/Secondbar/Secondbar";
import CheckoutPage from "./Components/CheckoutPage/CheckoutPage";
import PaymentPage from "./Components/PaymentPage/PaymentPage";
import HelpPage from "./Components/HelpPage/HelpPage";
import MyOrderPage from "./Components/MyOrderPage/MyOrderPage";
import OrderDetails from "./Components/OrderDetails/OrderDetails";
import MyProfile from "./Components/MyProfile/MyProfile";
import OrderTrack from "./Components/OrderTrack/OrderTrack";
import ProductCategory from "./Components/ProductCategory/ProductCategory";
import BottomBanner from "./Components/BottomBanner/BottomBanner";
import SourceByRegion from "./Components/SourceByRegion/SourceByRegion";

function App() {
  return (
    <Router>
      <Header /> {/* TopBanner Header and secondBanner */}
      <Route exact path="/">
        <Secondbar/>
        <SecondSection />
        <FlashSell />
        <Midsection /> 
        <TrendingProducts />
        <TrendingService />
        <TrendingLiveStream />
        <BottomBanner/>
        <ProductCategory/>
        {/* <ServiceCategory /> */}
        <Testimonial />
        <SourceByRegion/>
      </Route>
      <Route path="/signInuserPage">
        <SignUp />
      </Route>
      <Route path="/product_details">
        <ProductDetailsPage />
      </Route>
      <Route path="/checkout_here">
        <CheckoutPage/>
      </Route>
      <Route path="/payment_Page">
        <PaymentPage/>
      </Route>
      <Route path="/help_page">
        <HelpPage/>
      </Route>
      <Route path="/my_orders">
        <MyOrderPage/>
      </Route>
      <Route path="/order_details">
        <OrderDetails/>
      </Route>
      <Route path="/my_profile">
        <MyProfile/>
      </Route>
      <Route path="/order_track">
        <OrderTrack/>
      </Route>
      <Footer />
      <Switch></Switch>
    </Router>
  );
}

export default App;
