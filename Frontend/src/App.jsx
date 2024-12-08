import Navber from "./components/Navber/Navber";
import {Route ,Routes} from 'react-router-dom'
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopUP from "./components/LoginPopup/LoginPopUP";
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
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
