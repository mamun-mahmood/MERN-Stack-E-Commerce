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
import ScrollToTop from "./ScrollToTop";
import SellerSection from "./Components/SellerSection/SellerSection";
import AuthProvider from "./Components/AuthContext";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import SellerGuide from "./Components/SellerSection/SellerGuide";
import SellerSignIn from "./Components/Dashboard/SellerSignin/SellerSignIn";
import PrivateRouteSeller from "./Components/PrivateRoute/PrivateRouteSeller";
import StoreCreation from "./Components/Dashboard/StoreCreation";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Header /> {/* TopBanner Header and secondBanner */}
        <div
          style={{
            paddingTop: "70px",
          }}
        ></div>
        <Route exact path="/">
          <Secondbar />
          <SecondSection />
          <FlashSell />
          <Midsection />
          <TrendingProducts />
          <TrendingService />
          <TrendingLiveStream />
          <BottomBanner />
          <ProductCategory />
          <ServiceCategory />
          <Testimonial />
          <SourceByRegion />
        </Route>
        <Route path="/signInuserPage">
          <SignUp />
        </Route>
        <Route path="/product_details/:_id">
          <ProductDetailsPage />
        </Route>
        <Route path="/checkout_here">
          <CheckoutPage />
        </Route>
        <Route path="/payment_Page">
          <PaymentPage />
        </Route>
        <Route path="/help_page">
          <HelpPage />
        </Route>
        <PrivateRoute path="/my_orders">
          <MyOrderPage />
        </PrivateRoute>
        <Route path="/order_details">
          <OrderDetails />
        </Route>
        <PrivateRoute path="/my_profile">
          <MyProfile />
        </PrivateRoute>
        <Route path="/order_track">
          <OrderTrack />
        </Route>
        <Route path="/seller_section">
          <SellerGuide />
        </Route>
        <Route path="/seller_store/:storeID">
          <SellerSection />
        </Route>
        <Route path="/seller_signIn">
          <SellerSignIn />
        </Route>
        <Route path="/StoreCreation">
          <StoreCreation />
        </Route>
        <PrivateRouteSeller path="/seller_dashboard">
          <Dashboard />
        </PrivateRouteSeller>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
