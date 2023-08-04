import { Exemplo } from './Exemplo';
import { Dev } from './Dev';
export default function App() {
    const listaAlunos = ["Marya Laura, 16 anos, Mora em Nova Adradina", "Maria Eduarda, 17 anos, Mora em Nova Andradina", "Maria Fernanda, 15 anos, Mora em Nova Andradina"];
    return (
      <div>
        <h1>Gatinho</h1>
    <p>───▄█▄█▄─────────────▄▄</p>
    <p>───█████▄▄▄▄───────▄▀</p>
    <p>─────▀██▀▀████▄───▄▀</p>
    <p>────▄█▀▄██▄████▄─▄█</p>
    <br></br><br></br>
   
    <Exemplo lista={listaAlunos} />
    <Dev nome="Marya"/>
  </div>
    );
  }