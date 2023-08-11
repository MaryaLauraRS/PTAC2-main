import { Exemplo } from './Exemplo';
import {Dev} from './Dev';
export default function App() {
    const lista = ["Marya Laura, 16 anos, Mora em Nova Adradina", "Maria Eduarda, 17 anos, Mora em Nova Andradina", "Maria Fernanda, 15 anos, Mora em Nova Andradina"];
    return (
      <div>
    <Exemplo lista={lista} />
    <Dev nome="Marya"/>
  </div>
    );
  }