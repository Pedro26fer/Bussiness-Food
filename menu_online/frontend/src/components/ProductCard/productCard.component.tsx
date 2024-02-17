import { ProductCardStyled } from "./styles"
import { Link } from "react-router-dom"
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { useQuery, useQueryClient } from "react-query";


type Props = {
    photo:string,
    name: string,
    qty: number,
    price: string
    id: string
}
function ProductCard({photo, name, qty, price, id} : Props){

    const queryClient = useQueryClient();
    const handleDelete = async () => {
        const token = localStorage.getItem("token");
        try {
            await axios.delete(`http://localhost:3000/product/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Product deleted");
            queryClient.invalidateQueries('getProducts');
        } catch (error) {
            toast.error(`Failed to delete product: ${error}`);
        }
    };

    const confirmDelete = () => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            handleDelete();
        }
    };

    const key = ['deleteProduct'];
    const { isLoading } = useQuery(key, handleDelete, {
        enabled: false, 
    });

    return(
        <ProductCardStyled>
            <MdDelete id="Trash" onClick={confirmDelete} size={25}/>
            {isLoading && <span>Deleting ...</span>}
            <img src={photo} alt={name}/>
            <ul>
                <li>Name: {name}</li>
                <li>Quantity: {qty}u</li>
                <li>Price: $ {price}</li>
            </ul>
            <div>
                <p><Link to={`product/${id}`}>Ver mais</Link></p>
            </div>
        </ProductCardStyled>
    )
}

export default ProductCard