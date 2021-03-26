import './extra.scss';

const SettingsOptions = ({icons, optionsTitle, optionsDiscreption}) => {
    console.log(icons)
    return (
        <div className="settings-options">
            <div className="blin">{icons}</div>
            <div className="settings-options-right">
                <p className="options-title">{optionsTitle}</p>
                <p className="options-discreption">{optionsDiscreption}</p>
            </div>
        </div>
    )
}

export default SettingsOptions;