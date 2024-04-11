import Padre from "./components/Padre";
import Hijo from "./components/Hijo";
import Nieto from "./components/Nieto";

import EjemploContextoProvider from "./context/myContext";

import "./App.css";

function App() {
  return (
    <EjemploContextoProvider>
      <Padre />
      <Hijo />
      <Nieto />
    </EjemploContextoProvider>
  );
}

export default App;
