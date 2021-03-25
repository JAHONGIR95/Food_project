// import { Link } from 'react-router-dom';

import Header from '../Containers/Header/Header';
import Navbar from '../Containers/Navbar/Navbar';
import Select from '../Components/Extras/Select';
import MealCard from '../Components/MealCard/MealCard';

import MealPhoto from '../Assets/images/meal1.png';

import './Pages.scss';

const Homepage = () => {
    return (
        <div className="homepage"> 
            <div className="homepage-main">
                <Header headerName="Jaegar Resto" headerDate="Tuesday, 2 Feb 2021"/>
                <Navbar/>
                <div className="selection">
                    <h3 className="selection-title">Choose Dishes</h3>
                    <Select/>
                </div>
                <div className="meal-card-section">
                    <MealCard mealPhoto={MealPhoto} mealName="Spicy seasoned seafood noodles" mealPrice="$ 2.29" mealLeft="20 Bowls available"/>
                    <MealCard mealPhoto={MealPhoto} mealName="Spicy seasoned seafood noodles" mealPrice="$ 2.29" mealLeft="20 Bowls available"/>
                    <MealCard mealPhoto={MealPhoto} mealName="Spicy seasoned seafood noodles" mealPrice="$ 2.29" mealLeft="20 Bowls available"/>
                    <MealCard mealPhoto={MealPhoto} mealName="Spicy seasoned seafood noodles" mealPrice="$ 2.29" mealLeft="20 Bowls available"/>
                    <MealCard mealPhoto={MealPhoto} mealName="Spicy seasoned seafood noodles" mealPrice="$ 2.29" mealLeft="20 Bowls available"/>
                    <MealCard mealPhoto={MealPhoto} mealName="Spicy seasoned seafood noodles" mealPrice="$ 2.29" mealLeft="20 Bowls available"/>
                    <MealCard mealPhoto={MealPhoto} mealName="Spicy seasoned seafood noodles" mealPrice="$ 2.29" mealLeft="20 Bowls available"/>
                    <MealCard mealPhoto={MealPhoto} mealName="Spicy seasoned seafood noodles" mealPrice="$ 2.29" mealLeft="20 Bowls available"/>
                </div>
            </div> 
            <div className="homepage-right">
                dkfkdjfk
            </div>
        </div>
    )
}

export default Homepage;