import DashBoard from "../../components/Dashboard/dashboard.conponent";
import HeaderHome from "../../components/HeaderHome/header.component";
import { HomePage } from "./style";
 
type Props = {
  setToken: (token: string) => void
  products: any
  setProducts: any
}
 
 function Home({setToken, products, setProducts}: Props){
  return(
    <HomePage>
      <HeaderHome/>
      <DashBoard products={products} setProducts={setProducts}/>
    </HomePage>
 )
 }

 export default Home