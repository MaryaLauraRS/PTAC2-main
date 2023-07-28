import React from 'react'
import ReactDOM from 'react-dom/client'

export function App() {
  return (
    <div>
      <h1>Gatinho</h1>
  <p>───▄█▄█▄─────────────▄▄</p>
  <p>───█████▄▄▄▄───────▄▀</p>
  <p>─────▀██▀▀████▄───▄▀</p>
  <p>────▄█▀▄██▄████▄─▄█</p>
  <br></br><br></br>
  <p>──██████──────██████</p>
  <p>─████████▄▄▄▄████████</p>
  <p>──██████████████████</p>
  <p>───████████████████</p>
  <p>─────████████████</p>
  <p>───────████████</p>
  <p>─────────████</p>
  <p>──────────██</p>
</div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
