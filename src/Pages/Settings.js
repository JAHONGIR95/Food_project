import Header from '../Containers/Header/Header';
import SettingsOptions from '../Components/Extras/Settings-options';
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
                <div className="settings-main-right"></div>
            </div>
        </div>
    )
}

export default Settings;