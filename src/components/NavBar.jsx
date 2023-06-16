import { IcoHouse, IcoInfo } from "./Icons";

export default function NavBar(){
    return (
        <nav>
            <ul>
                <li>
                    <IcoHouse /> Início
                </li>
                <li>
                    <IcoInfo /> Sobre
                </li>
            </ul>
        </nav>
    )
}