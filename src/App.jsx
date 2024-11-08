
import './App.css'
import { useState } from 'react';
import Form from './Components/Form';
import Card from './Components/Card';



const App = () => {
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div className="App">
      <h1>Formulario de Actividades Subacuáticas</h1>
      <Form onSubmit={handleFormSubmit} />
      {userData && <Card nombre={userData.nombre} actividad={userData.actividad} />}
    </div>
  );
};

export default App;
