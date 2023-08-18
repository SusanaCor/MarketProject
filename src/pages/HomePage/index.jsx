import { Products } from "../../components/Products/products.jsx";
import { Header } from "../../components/Header/Header.jsx";
import Carou from "../../components/carrousel/index.jsx";

export const HomePage = () => {
  return (
    <div>
      
      <Header />
      <Carou />
      
      <Products />
    </div>
  );
};
