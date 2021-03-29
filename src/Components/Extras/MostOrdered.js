import './extra.scss';

const MostOrdered = ({ orderedMealImage, orderedMeal, mealCount }) => {
    return(
        <div className="most-ordered">
            <img src={orderedMealImage} className="meal-image" alt=""/>
            <div>
                <p className="meal-name">{orderedMeal}</p>
                <p className="meal-count">{mealCount}</p>
            </div>
        </div>
    )
}
export default MostOrdered;
