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
import Secondbar from './Components/Header/Navbar/Navbar'
function App() {
  return (
    <Router>
      <Header /> {/* TopBanner Header and secondBanner */}
      <Route exact path="/">
      <Secondbar/>
        <SecondSection /> {/*side category mid slider and right side stuffs */}
        <FlashSell />
        <Midsection />
        <TrendingProducts />
        <TrendingService />
        <TrendingLiveStream />
        <ServiceCategory />
        <Testimonial />
      </Route>
      <Route path="/signInuserPage"> 
        <SignUp/>
      </Route>
      <Footer />
      <Switch></Switch>
    </Router>
  );
}

export default App;
