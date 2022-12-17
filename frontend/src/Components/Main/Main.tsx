import "./style.css";
import Button from "../Button/Button"

function Main() {

  const tasks = [
    {
      id: 1,
      title: "Teste 1",
      body: "Testando o teste número 1",
      status: "Novo"
    },
    {
      id: 2,
      title: "Teste 2",
      body: "Testando o teste número 2",
      status: "Em andamento"
    },
    {
      id: 3,
      title: "Teste 3",
      body: "Testando o teste número 3",
      status: "Finalizado"
    },
    {
      id: 4,
      title: "Teste 4",
      body: "Testando o teste número 4",
      status: "Cancelado"
    }
  ]

  return (
    <div className="main">
      <Button />
      {tasks.map(task => {
        return(
          <ul key={task.id} className="main-tasks">
            <li className="main-tasks_title">{task.title}</li>
            <li className="main-tasks_body">{task.body}</li>
            <li className="main-tasks_status">{task.status}</li>
            <button className="main-tasks_button">Editar</button>
          </ul>
        );
      })}
    </div>
  );
}

export default Main;
