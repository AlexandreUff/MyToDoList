import NavBar from "../components/NavBar";

export default function MainHome(props) {
  return (
    <main className="main-about">
      <NavBar />
      <section>
        <div className="about-content">
          <h4>Bem-vindo ao My ToDo List!</h4>
          <p>
            O <span>My ToDo List</span> é uma lista de afazeres, um sistema que
            permite que você crie, gerencie e conclua suas tarefas de maneira
            fácil e organizada.
          </p>
          <p>
            Para começar, você pode criar uma lista com um nome que a represente
            e contextualize. Por exemplo, se você está planejando uma rotina de
            exercícios, pode criar uma lista chamada "Exercícios" e nela pôr os
            itens que irão compor sua lista de exercícios como "Ir à academia",
            "Correr ao ar livre" e "Alongar os músculos".
          </p>
          <p>
            Cada item representa uma tarefa específica que precisa ser
            realizada. Dessa forma, você tem uma visão clara e organizada de
            todas as tarefas relacionadas a esse objetivo.
          </p>
          <p>
            Além de criar listas e adicionar itens, você também pode editar e
            excluir tanto as listas quanto os itens individualmente e,
            especificamentte para os itens, marcá-los e desmarcá-los como{" "}
            <span className="check">☑ concluídos</span>. Isso permite que você
            mantenha suas informações atualizadas e ajuste suas tarefas de
            acordo com suas necessidades em constante mudança como forma de
            acompanhar e orientar seu progresso.
          </p>
          <p>
            Você também pode compartilhar suas listas por e-mail. Basta
            selecionar a lista desejada e clicar em "Enviar esta lista por
            e-mail". Isso é útil para colaboração ou para lembrar alguém de
            tarefas importantes.
          </p>
          <p>
            Em resumo, o <span>My ToDo List</span> é uma ferramenta simples,
            porém poderosa, que facilita a organização de suas tarefas diárias.
            Com ele, você pode criar listas com nomes contextualizados,
            adicionar e gerenciar itens, marcar tarefas como concluídas e até
            compartilhar suas listas por e-mail. Experimente essa ferramenta
            prática e torne suas tarefas diárias mais gerenciáveis e produtivas!
          </p>
        </div>
      </section>
    </main>
  );
}
