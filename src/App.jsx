import "./App.css";
import Router from "./Routes/Router";
import ProductProvider from "./Contexts/productsContext";

function App() {
  return (
    <>
      <ProductProvider>
        <Router />
      </ProductProvider>
    </>
  );
}

export default App;
