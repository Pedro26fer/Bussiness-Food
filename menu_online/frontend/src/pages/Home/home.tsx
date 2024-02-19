import DashBoard from "../../components/Dashboard/dashboard.conponent";
import HeaderHome from "../../components/HeaderHome/header.component";
import { HomePage } from "./style";
import Modal from "../../components/Modal/modal";

type Props = {
  products: any;
  setProducts: any;
  isVisible: any;
  postOrUpdate: any;
  setIsVisible: any
};

function Home({ products, setProducts, isVisible, postOrUpdate, setIsVisible }: Props) {


  return (
    <HomePage>
      <HeaderHome />
      <Modal isVisible={isVisible} postOrUpdate={postOrUpdate} setIsVisible={setIsVisible}/>
      <DashBoard products={products} setProducts={setProducts} setIsVisible={setIsVisible} />
    </HomePage>
  );
}

export default Home;
