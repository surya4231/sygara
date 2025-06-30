// memanggil komponen Routes & Route dari react-router-dom
import { Routes, Route } from "react-router-dom"

// memanggil halaman di folder pages/costumer
import LandingPage from "./pages/Customer/LandingPage"
import OrderPage from "./pages/Customer/OrderPage"
import CartPage from "./pages/Customer/CartPage"
import PaymentPage from "./pages/Customer/PaymentPage"
import ProductPage from "./pages/Customer/ProductPage"
import SuccesPage from "./pages/Customer/SuccesPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HistoryPage from "./pages/Customer/HistoryPage"


function Router() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/succes" element={<SuccesPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/history" element={<HistoryPage/>}/>
      </Routes>

    </>
  )
}

export default Router
