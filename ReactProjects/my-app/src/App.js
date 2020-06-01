import React from 'react';
//import Evento from './components/Evento';
//import Count from './components/Contador';
import Foco from './components/Foco';


function App() {
  return (
    <div>
      <Foco ubication="Recamara" ubicationX="160px" ubicationY="190px"/>
      <Foco ubication="Baño 1" ubicationX="410px" ubicationY="160px"/>
      <Foco ubication="Baño 2" ubicationX="400px" ubicationY="450px"/>
      <Foco ubication="Cocina" ubicationX="690px" ubicationY="450px"/>
      <Foco ubication="Sala" ubicationX="580px" ubicationY="150px"/>
      <Foco ubication="Comedor" ubicationX="800px" ubicationY="180px"/>
      <Foco ubication="Recamara niños" ubicationX="160px" ubicationY="430px"/>
    </div>
  );
}

export default App;
