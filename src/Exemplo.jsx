export function Exemplo({lista}, {nome}){
    return(
        <div>
  <p>──██████──────██████</p>
  <p>─████████▄▄▄▄████████</p>
  <p>──██████████████████</p>
  <p>───████████████████</p>
  <p>─────████████████</p>
  <p>───────████████</p>
  <p>─────────████</p>
  <p>──────────██</p>
  <br></br><br></br>
<h1>Lista de alunos</h1>
  {lista.map(aluno => (
            <ul>
        <li>{aluno}</li>
          </ul>
          ))}
    
        </div>
    );
}
