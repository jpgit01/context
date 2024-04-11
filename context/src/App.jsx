import Padre from "./components/Padre";
import Hijo from "./components/Hijo";
import Nieto from "./components/Nieto";
import Nieto1 from "./components/nieto1";

import EjemploContextoProvider from "./context/myContext";

import "./App.css";

function App() {
  return (
    <EjemploContextoProvider>
      <Padre />
      <Hijo />
      <Nieto />
      <Nieto1/>
    </EjemploContextoProvider>
  );
}

export default App;
