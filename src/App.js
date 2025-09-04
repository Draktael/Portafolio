import './App.css';
import Home from './pages/home';
import "primereact/resources/themes/vela-blue/theme.css"; // Tema PrimeReact
import "primereact/resources/primereact.min.css";        // Estilos de componentes
import "primeicons/primeicons.css";                     // Iconos PrimeIcons
import "primeflex/primeflex.css";                       // (Opcional) Estilos utilitarios de PrimeFlex

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
