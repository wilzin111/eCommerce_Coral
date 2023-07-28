import { useContext } from "react";
import { productContext } from "../../Contexts/productsContext";

const products = () => {
  const { produtos } = useContext(productContext);
  return <div>products</div>;
};

export default products;
