import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify";
import HeaderHome from "../../components/HeaderHome/header.component";
import { ProductPafeStyled } from "./style";

type Product = {
    id: string
    name: string
    price: string
    photo: string
    qty: number
    categories: [{
        name: string
    }]
}

function ProductPage(){

    const { id } = useParams()
    const [product, setProduct] = useState<Product | any>({})


    const fetchProducts = async () => {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`http://localhost:3000/product/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProduct(response.data)
        } catch (error) {
          toast.error("Failed to loading this product");
        }
      };
    
      const key = ["getProduct"];
      const { isLoading } = useQuery(key, async () => {
        await fetchProducts();
      });

      console.log(product)


    return(
        <ProductPafeStyled>
            <HeaderHome />
            <main>
                <div>
                    <figure>
                        <img src={product.photo} alt="" />
                        <figcaption>{product.name}</figcaption>
                    </figure>
                </div>
                <div id="info">
                    <section>
                        <h3>{product.name}</h3>
                        <ul>
                            <li>Price: $ {product.price}</li>
                            <li>Quantity: {product.qty}u</li>
                        </ul>
                    </section>
                    <section>
                        <h3>Categories</h3>
                        {product.categories? (
                            <ul>
                                {product.categories.map(((ctg :any) => (
                                    <li>{ctg.name}</li>
                                )))}
                            </ul>
                        ) : (
                            <h3>No Categories</h3>
                        )
                    
                    }
                    </section>
                </div>
            </main>

        </ProductPafeStyled>
    )
}

export default ProductPage