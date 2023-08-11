export function Exemplo({lista}){
    return( 
      <div> 
    <h1>Lista de alunos</h1>
  {lista.map(aluno => (
            <ul>
        <li>{aluno}</li>
          </ul>
          ))}
    
        </div>
    );
}