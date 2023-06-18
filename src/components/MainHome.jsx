import Button from "./Button";
import { IcoStar } from "./Icons";
import NavBar from "./NavBar";

export default function MainHome(props){
    return (
        <main className="main-home">
            <NavBar />
            <section>
                <Button title={"Criar uma lista"}>
                    <IcoStar/> Criar ToDo List
                </Button>
            </section>
        </main>
    )
}