import axios from "axios";
import { useState } from "react";
import { QueryClient, useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify";
import HeaderHome from "../../components/HeaderHome/header.component";
import { ProductPageStyled } from "./style";
import Modal from "../../components/Modal/modal";
import { GiForkKnifeSpoon } from "react-icons/gi";


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

type Props = {
    isVisible: boolean
    setIsVisible: (bool: boolean) => void
}

function ProductPage({ isVisible, setIsVisible}: Props){

    const queryClient = new QueryClient()

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
          queryClient.invalidateQueries("getProduct")
        } catch (error) { 
          toast.error("Failed to loading this product");
        }
      };
    
      const key = ["getProduct"];
      const {} = useQuery(key, async () => {
        await fetchProducts();
      });

  


    return(
        <ProductPageStyled>
            <Modal id={id} isVisible={isVisible} postOrUpdate={false} setIsVisible={setIsVisible}/>
            <HeaderHome />
            <main id="mainPage">
                <div>
                    <figure>
                        <img src={product.photo} alt="" />
                        <figcaption>{product.name}</figcaption>
                    </figure>
                </div>
                <div id="info">
                    <section>
                        <GiForkKnifeSpoon id="fork" size={52}/>
                        <h3>{product.name}</h3>
                        <ul>
                            <li>Price: $ {product.price}</li>
                            <li>Quantity: {product.qty}u</li>
                        </ul>
                    </section>
                    <button onClick={() => setIsVisible(true)}>Edit</button>
                    <section>
                        <h3>Categories</h3>
                        {product.categories? (
                            <ul>
                                {product.categories.map(((ctg :any) => (
                                    <li key={ctg.id}>{ctg.name}</li>
                                )))}
                            </ul>
                        ) : (
                            <h3>No Categories</h3>
                        )
                    
                    }
                    </section>
                </div>
            </main>

        </ProductPageStyled>
    )
}

export default ProductPage