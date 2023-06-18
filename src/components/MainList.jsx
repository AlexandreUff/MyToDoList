import Button from "./Button";
import { IcoClipBoardChecked } from "./Icons";
import Item from "./Item";
import NavBar from "./NavBar";

export default function MainHome(props){
    return (
        <main className="main-list">
            <NavBar />
            <section>
                <Button icon={<IcoClipBoardChecked/>} text={"Criar um item"} action={()=>{console.log("itsWorks too")}} />
                <div className="item-area">
                    <Item text="Este é um item very bom demais da conta partner"/>
                    <Item text="Este é um item very bom demais da conta partner"/>
                    <Item text="Este é um item very bom demais da conta partner"/>
                </div>
            </section>
        </main>
    )
}