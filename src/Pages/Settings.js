import Header from '../Containers/Header/Header';

import './Pages.scss';

const Settings = () => {
    return (
        <div className="settings">
            <Header headerName="Settings"/>
            <div className="settings-main">
                <div className="settings-main-left"></div>
                <div className="settings-main-right"></div>
            </div>
        </div>
    )
}

export default Settings;