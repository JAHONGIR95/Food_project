import Search from  '../../Components/Extras/Search';

import './Header.scss';

const Header = ({ headerName, headerDate}) => {
    return(
        <div className="header">
            <div className="header-left">
                <h2 className="header-name">{headerName}</h2>
                <p className="header-date">{headerDate}</p>
            </div>        
        </div>
    )
}

export default Header;

