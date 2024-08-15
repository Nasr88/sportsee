import { Rectangle } from 'recharts';
import PropTypes from 'prop-types';

// Composant personnalisé pour le curseur
const CustomCursor = ({ points, width, height }) => {
  const { x, y } = points[0];

  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.1)" // Modifier la couleur pour obtenir un rouge plus foncé
      x={x}
      y={y}
      width={width * 2}// Augmenter la largeur pour couvrir toute la zone
      height={height * 2} // Augmenter la hauteur pour couvrir toute la zone
    />
  );
};
// Définir les PropTypes pour le composant
CustomCursor.propTypes = {
    points: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      })
    ).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };
export default CustomCursor;