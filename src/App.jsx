import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer saludos={"Bienvenidos"} />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/item/:ItemId"
              element={<ItemDetailContainer />} />
            <Route
              path="*"
              element={<h1 className="titles">404 ERROR - NO ENCONTRADO</h1>}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
            <Route
              path="/checkout"
              element={<CheckoutForm />}
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
