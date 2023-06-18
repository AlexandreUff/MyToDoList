import Button from "./Button";
import { IcoStar } from "./Icons";
import List from "./List";
import NavBar from "./NavBar";

export default function MainHome(props){
    return (
        <main className="main-home">
            <NavBar />
            <section>
                <Button icon={<IcoStar/>} text={"Criar uma lista"} action={()=>{console.log("itsWorks")}} />
                <div className="list-area">
                    <List text="Capinar um lote esta semana porque o negócio" />
                    <List text="Capinar um lote esta semana porque o negócio" />
                    <List text="Capinar um lote esta semana porque o negócio" />
                    <List text="Capinar um lote esta semana porque o negócio" />
                    <List text="Capinar um lote esta semana porque o negócio" />
                    <List text="Capinar um lote esta semana porque o negócio" />
                    <List text="Capinar um lote esta semana porque o negócio" />
                    <List text="Capinar um lote esta semana porque o negócio" />
                    <List text="Capinar um lote esta semana porque o negócio" />
                </div>
            </section>
        </main>
    )
}