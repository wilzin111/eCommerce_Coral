import "./App.css";
import Router from "./Routes/Router";
import DataUserProvider from "./Contexts/dataUser";
import ProductProvider from "./Contexts/productsContext";

function App() {
  return (
    <>
      <DataUserProvider>
        <ProductProvider>
          <Router />
        </ProductProvider>
      </DataUserProvider>

    </>
  );
}

export default App;
