import Button from "./Button";
import { IcoClipBoardChecked } from "./Icons";
import NavBar from "./NavBar";

export default function MainHome(props){
    return (
        <main className="main-list">
            <NavBar />
            <section>
                <Button icon={<IcoClipBoardChecked/>} text={"Criar um item"} action={()=>{console.log("itsWorks too")}} />
                <div className="list-area">
                    
                </div>
            </section>
        </main>
    )
}