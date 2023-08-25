export function Exemplo({lista}){
    return( 
      <div> 
    <h1>Lista de alunos</h1>
  {lista.map(aluno => (
            <ul>
        <li>{aluno.nome}, {aluno.idade} anos, mora em {aluno.cidade}. </li>
          </ul>
          ))}
    
        </div>
    );
}