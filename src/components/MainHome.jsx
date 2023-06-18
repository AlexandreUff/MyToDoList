import Button from "./Button";
import { IcoStar } from "./Icons";
import NavBar from "./NavBar";

export default function MainHome(props){
    return (
        <main className="main-home">
            <NavBar />
            <section>
                <Button icon={<IcoStar/>} text={"Criar uma lista"} action={()=>{console.log("itsWorks")}} />
            </section>
        </main>
    )
}