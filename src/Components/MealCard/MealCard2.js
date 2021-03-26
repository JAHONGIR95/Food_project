import './MealCard.scss';
import Editor from '../../Assets/images/icons/pen.svg';

const MealCard2 = ({mealPhoto, mealName, mealPrice}) => {
    return(
        <div className="meal-card2">
            <img src={mealPhoto} className="male-photo" alt=""/>
            <p className="meal-name">{mealName}</p>
            <p className="meal-price">{mealPrice}</p>
            <div className="meal-bottom">
                <img className="editor" src={Editor} alt=""/>
                <p className="edition">Edit dish</p>
            </div>
        </div>
    )
}

export default MealCard2;