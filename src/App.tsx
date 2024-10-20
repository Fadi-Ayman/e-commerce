import { theme, ThemeProvider, CssBaseline } from "./styles/theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Pages
import AppLayout from "./components/LayoutComponents/AppLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserSettings from "./pages/UserSettings";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/OneUseComponents/ScrollToTopOnNavigate";
import WishList from "./features/settings/childPages/WishList";
import AccountData from "./features/settings/childPages/AccountData";
import Orders from "./features/settings/childPages/Orders";
import Checkout from "./features/cart/childPages/Checkout";
import OrderComplete from "./features/cart/childPages/OrderComplete";
import CartTable from "./features/cart/childPages/CartTable";
import Product from "./pages/Product";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Baseline For Theme Provider By MUI */}
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/products/:productId" element={<Product />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/cart" element={<Cart />}>
              <Route index element={<Navigate to="/cart/table" />} />
              <Route path="/cart/table" element={<CartTable />} />
              <Route path="/cart/checkout" element={<Checkout />} />
              <Route path="/cart/order-complete" element={<OrderComplete />} />
            </Route>

            <Route path="/settings" element={<UserSettings />}>
              <Route index element={<Navigate to="/settings/account" />} />
              <Route
                path="/settings/account"
                element={<AccountData />}
              />
              <Route path="/settings/wishlist" element={<WishList />} />
              <Route path="/settings/orders" element={<Orders />} />
            </Route>
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* Sctoll To Top */}
        <ScrollToTop />
      </BrowserRouter>

      {/* Toaster Factory */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
        }}
      />
    </ThemeProvider>
  );
}

export default App;
