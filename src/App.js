import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import Home from "./components/UserInterface/components/screens/Home";
import ProductDetail from "./components/UserInterface/components/screens/ProductDetail";
import ProductFullDetail from "./components/UserInterface/components/screens/ProductFullDetail";
import Cart from "./components/UserInterface/components/screens/Cart";
import PlusMinusComponent from "./components/UserInterface/components/PlusMinusComponent";
import LoginComponent from "./components/UserInterface/components/LoginComponent";
import OtpComponent from "./components/UserInterface/components/OtpComponent";
import MyAccount from "./components/UserInterface/components/screens/MyAccount";
import Shopping from "./components/UserInterface/components/screens/Shopping";
import Payment from "./components/UserInterface/components/Payment";
function App() {
  return (
    <div>
       <Router>
        <Routes>
          <Route element={<AdminLogin/>} path="/adminlogin"/>
          <Route element={<Dashboard/>} path="/dashboard/*"/>
          <Route element={<Home/>} path="/home"/>
          <Route element={<ProductDetail/>} path="/productdetail"/>
          <Route element={<ProductFullDetail/>} path="/productfulldetail"/>
          <Route element={<Cart/>} path="/cart"/>
          <Route element={<PlusMinusComponent/>} path="/pm"/>
          <Route element={<LoginComponent/>} path="/login"/>
          <Route element={<OtpComponent/>} path="/otp"/>
          <Route element={<MyAccount/>} path="/myaccount"/>
          <Route element={<Shopping/>} path="/shopping"/>
          <Route element={<Payment/>} path="/payment"/>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
