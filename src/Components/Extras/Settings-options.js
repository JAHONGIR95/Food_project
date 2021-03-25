const SettingsOptions = ({icons, optionsTitle, optionsDiscreption}) => {
    return (
        <div className="settings-options">
            <img src={icons} alt=""/>
            <div className="settings-options-right">
                <p className="options-title">{optionsTitle}</p>
                <p className="options-discreption">{optionsDiscreption}</p>
            </div>
        </div>
    )
}

export default SettingsOptions;