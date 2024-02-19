import { FcManager } from "react-icons/fc";
import { Header } from "./styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

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

  return (
    <Header>
      <div>
        <section>
          <h1>Bussines Food</h1>
          <FcManager id="boss" size={42} />
          {decoded && <span>Adm: {decoded.name!}</span>}
          {location.pathname == "/home" ? null : (
            <button id="backHome" onClick={() => navigate("/home")}>
              Home
            </button>
          )}
        </section>
      </div>
      <button onClick={() => handleLogout()}>logout</button>
    </Header>
  );
}

export default HeaderHome;
