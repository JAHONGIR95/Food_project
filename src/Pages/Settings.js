import Header from '../Containers/Header/Header';
import Navbar from '../Containers/Navbar/Navbar';
import SettingsOptions from '../Components/Extras/Settings-options';
import MealCard1 from '../Components/MealCard/MealCard1';
import MealCard2 from '../Components/MealCard/MealCard2';
import Meal from '../Assets/images/meal1.png';

import {
    Heart,
    Restaurant, 
    Products,
    Notifications,
    Security,
    About
} from '../Components/SettingsIcons/SettingsIcons';

import './Pages.scss';

const Settings = () => {
    return (
        <div className="settings">
            <Header headerName="Settings"/>
            <div className="settings-main">
                <div className="settings-main-left">
                <SettingsOptions icons={<Heart/>} optionsTitle="Appereance" optionsDiscreption="Dark and Light mode, Font size"/>
                <SettingsOptions icons={<Restaurant/>} optionsTitle="Appereance" optionsDiscreption="Dark and Light mode, Font size"/>
                <SettingsOptions icons={<Products/>} optionsTitle="Appereance" optionsDiscreption="Dark and Light mode, Font size"/>
                <SettingsOptions icons={<Notifications/>} optionsTitle="Appereance" optionsDiscreption="Dark and Light mode, Font size"/>
                <SettingsOptions icons={<Security/>} optionsTitle="Appereance" optionsDiscreption="Dark and Light mode, Font size"/>
                <SettingsOptions icons={<Security/>} optionsTitle="Appereance" optionsDiscreption="Dark and Light mode, Font size"/>
                <SettingsOptions icons={<About/>} optionsTitle="Appereance" optionsDiscreption="Dark and Light mode, Font size"/>
                </div>
                <div className="settings-main-right">
                    <Header headerName="Products Management"/>
                    <Navbar/>
                    <div className="settings-middle">
                    <MealCard1/>
                    <MealCard2 mealPhoto={Meal} mealName="Spicy seasoned seafood noodles" mealPrice="$ 2.69 ~ 20 Bowls" />
                    </div>
                    <div className="settings-bottom">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;