
import PropTypes from 'prop-types';

const Card = ({ nombre, actividad }) => {
  return (
    <div className="card">
      <h3>Hola {nombre}!</h3>
      <p>Sabemos que tu actividad subacuática favorita es {actividad}.</p>
    </div>
  );
};

// Validación de props 
Card.propTypes = {
  nombre: PropTypes.string.isRequired,
  actividad: PropTypes.string.isRequired,
};

export default Card;



