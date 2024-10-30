import { theme, ThemeProvider, CssBaseline } from "./styles/theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";

// Pages
const AppLayout = lazy(() => import("./components/LayoutComponents/AppLayout"));
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const UserSettings = lazy(() => import("./pages/UserSettings"));
const Cart = lazy(() => import("./pages/Cart"));
const WishList = lazy(() => import("./features/settings/childPages/WishList"));
const AccountData = lazy(
  () => import("./features/settings/childPages/AccountData")
);
const Orders = lazy(() => import("./features/settings/childPages/Orders"));
const Checkout = lazy(() => import("./features/cart/childPages/Checkout"));
const OrderComplete = lazy(
  () => import("./features/cart/childPages/OrderComplete")
);
const CartTable = lazy(() => import("./features/cart/childPages/CartTable"));
const Product = lazy(() => import("./pages/Product"));
import AuthProvider from "./context/AuthContext";
import ScrollToTop from "./components/OneUseComponents/ScrollToTopOnNavigate";
import PageLoadingSpinner from "./components/PageLoadingSpinner";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AuthProvider>
          <Suspense fallback={<PageLoadingSpinner height="80vh" />}>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Navigate to="home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/products/:productId" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />}>
                  <Route
                    index
                    element={<Navigate replace to="/cart/table" />}
                  />
                  <Route path="/cart/table" element={<CartTable />} />
                  <Route path="/cart/checkout" element={<Checkout />} />
                  <Route
                    path="/cart/order-complete"
                    element={<OrderComplete />}
                  />
                </Route>
                <Route path="/settings" element={<UserSettings />}>
                  <Route
                    index
                    element={<Navigate replace to="/settings/account" />}
                  />
                  <Route path="/settings/account" element={<AccountData />} />
                  <Route path="/settings/wishlist" element={<WishList />} />
                  <Route path="/settings/orders" element={<Orders />} />
                </Route>
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <ScrollToTop />
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 4000,
          },
        }}
      />
    </ThemeProvider>
  );
}

export default App;
