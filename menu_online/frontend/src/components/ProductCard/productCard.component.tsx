import { ProductCardStyled } from "./styles"


type Props = {
    photo:string,
    name: string,
    qty: number,
    price: string
}
function ProductCard({photo, name, qty, price} : Props){
    return(
        <ProductCardStyled>
            <img src={photo} alt={name}/>
            <ul>
                <li>Name: {name}</li>
                <li>Quantity: {qty}u</li>
                <li>Price: $ {price}</li>
            </ul>
        </ProductCardStyled>
    )
}

export default ProductCard