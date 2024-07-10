
import PropTypes from 'prop-types';


const NutrientCard = ({ icon, type, amount , color}) => {
  return (
    <div className="nutrient-card">
      <div className="nutrient-card__icon" style={{backgroundColor: color}}>
        <img src={icon} alt={`${type} icon`} />
      </div>
      <div className="nutrient-card__info">
        <span className="nutrient-card__amount">{amount}</span>
        <span className="nutrient-card__type">{type}</span>
      </div>
    </div>
  );
};

NutrientCard.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default NutrientCard;
