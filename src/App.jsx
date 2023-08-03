import "./App.css";
import Router from "./Routes/Router";
import DataUserProvider from "./Contexts/dataUser";
import ProductProvider from "./Contexts/productsContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <DataUserProvider>
        <ProductProvider>
          <Router />
        </ProductProvider>
      </DataUserProvider>
      <ToastContainer/>

    </>
  );
}

export default App;
