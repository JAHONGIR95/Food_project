import './MealCard.scss';

const MealCard = ({ mealPhoto, mealName, mealPrice, mealLeft }) => {
    return(
        <div className="meal-card">
            <img src={mealPhoto} alt="" className="meal-photo"/>
            <h5 className="meal-name">{mealName}</h5>
            <p className="meal-price">{mealPrice}</p>
            <p className="meal-left">{mealLeft}</p>
        </div>
    )
}

export default MealCard;