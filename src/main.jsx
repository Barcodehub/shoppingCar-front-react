import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' //estilos globales a todo el proyecto
import App from './App.jsx'


//lee root de la posicion donde está en el index.html
//Agregamos el contenido de React allí (App -> App.jsx)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
