import { Link } from "react-router-dom";
import { IcoHouse, IcoInfo } from "./Icons";

export default function NavBar(){
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>
                        <IcoHouse /> Início
                    </Link>
                </li>
                <li>
                    <Link to={"/about"}>
                        <IcoInfo /> Sobre
                    </Link>
                </li>
            </ul>
        </nav>
    )
}