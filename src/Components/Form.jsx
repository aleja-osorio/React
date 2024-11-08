import { useState } from 'react';
import PropTypes from 'prop-types';
//import './Form.css';

const Form = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [actividad, setActividad] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validaciones
    if (nombre.trim().length < 3) {
      setError("El nombre debe tener al menos 3 caracteres.");
      return;
    }
    if (actividad.trim().length < 3) {
      setError("La actividad subacuática favorita debe tener al menos 3 caracteres.");
      return;
    }

    // Si las validaciones pasan, enviamos los dato
    setError('');
    onSubmit({ nombre, actividad });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
      </div>
      <div>
        <label>Actividad subacuática favorita:</label>
        <input
          type="text"
          value={actividad}
          onChange={(event) => setActividad(event.target.value)}
        />
      </div>
      <button 
        type="submit"
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        Enviar
      </button>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </form>
  );
};

// Validación de props con PropTypes
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;

