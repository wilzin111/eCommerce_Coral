import "./App.css";
import Router from "./Routes/Router";
import DataUserProvider from "./Contexts/dataUser";
import ProductProvider from "./Contexts/productsContext";
import { ToastContainer } from "react-toastify";
import { WishlistProvider } from "./Contexts/wishListContext";

function App() {
  return (
    <>
      <DataUserProvider>
        <ProductProvider>
          <WishlistProvider>
            <Router />
          </WishlistProvider>
        </ProductProvider>
      </DataUserProvider>
      <ToastContainer/>

    </>
  );
}

export default App;
