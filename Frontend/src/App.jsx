import { useState } from "react";
import {Route ,Routes} from 'react-router-dom'
import Navber from "./components/Navber/Navber";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopUP from "./components/LoginPopup/LoginPopUP";
import Verify from "./pages/verify/Verify.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";
function App() {
  const [showlogin , setshowlogin] = useState(false);
  return (
    <>
      {showlogin?<LoginPopUP setshowlogin = {setshowlogin}/>:<></>}
      <div className="app">
        <Navber setshowlogin={setshowlogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
