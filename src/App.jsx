import { Exemplo } from './Exemplo.jsx';
import { Dev } from './Dev.jsx';
export default function App() {
    const lista = [
      {nome: "Marya Laura", idade:16, cidade: "Nova Adradina"},
    {nome: "Maria Eduarda", idade: 17, cidade: "Nova Andradina"},
    {nome: "Maria Fernanda", idade: 15, cidade: "Nova Andradina"}];
    return (
      <div>
    <Exemplo lista={lista} />
    <Dev nome="Marya"/>
  </div>
    );
  }