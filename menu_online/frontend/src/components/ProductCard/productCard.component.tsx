import { ProductCardStyled } from "./styles"
import { Link } from "react-router-dom"


type Props = {
    photo:string,
    name: string,
    qty: number,
    price: string
    id: string
}
function ProductCard({photo, name, qty, price, id} : Props){
    return(
        <ProductCardStyled>
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