import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import ProductCard from "../ProductCard/productCard.component";
import { DashboardDiv } from "./style";

type Props = {
  products: any;
  setProducts: any;
};

function DashBoard({ setProducts, products }: Props) {
  const fetchProducts = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:3000/product", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      toast.error("Failed to loading your products");
    }
  };

  const key = ["getProducts"];
  const { isLoading } = useQuery(key, async () => {
    await fetchProducts();
  });

  return (
    <DashboardDiv>
      <ul>
        {isLoading && <p>Loading data</p>}
        {products.map((prod: any) => (
          <li key={prod.id}>
            <ProductCard
              photo={prod.photo}
              name={prod.name}
              price={prod.price}
              qty={prod.qty}
              id={prod.id}
            />
          </li>
        ))}
      </ul>
    </DashboardDiv>
  );
}

export default DashBoard;
