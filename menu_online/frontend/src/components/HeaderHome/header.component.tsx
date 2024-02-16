import { FcManager } from "react-icons/fc";
import { Header } from "./styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useLocation } from "react-router-dom";

type Decoded = {
  name: string;
};

function HeaderHome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("token");
  };
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    toast.error("You are not authenticated");
  }

  const decoded: Decoded = jwtDecode(token!);

  console.log(location.pathname);

  return (
    <Header>
      <div>
        <h1>Bussines Food</h1>
        <section>
          <FcManager size={52} />
          {decoded && <span>Adm: {decoded.name!}</span>}
        </section>
        {location.pathname == "/home" ? null : (
          <button id="backHome" onClick={() => navigate("/home")}>
            Home
          </button>
        )}
      </div>
      <button onClick={() => handleLogout()}>logout</button>
    </Header>
  );
}

export default HeaderHome;
