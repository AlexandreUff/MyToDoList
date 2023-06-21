import { Link } from "react-router-dom";
import { IcoHouse, IcoInfo } from "./Icons";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"} title="Início">
            <IcoHouse /> Início
          </Link>
        </li>
        <li>
          <Link to={"/about"} title="Sobre">
            <IcoInfo /> Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}
