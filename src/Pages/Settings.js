import Header from '../Containers/Header/Header';
import SettingsOptions from '../Components/Extras/Settings-options';

import './Pages.scss';

const Settings = () => {
    return (
        <div className="settings">
            <Header headerName="Settings"/>
            <div className="settings-main">
                <div className="settings-main-left">
                    <SettingsOptions optionsTitle="Appereance" optionsDiscreption="Dark and Light mode, Font size"/>
                </div>
                <div className="settings-main-right"></div>
            </div>
        </div>
    )
}

export default Settings;