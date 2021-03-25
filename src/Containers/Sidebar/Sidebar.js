import {Link} from 'react-router-dom';

import {
    MainLogo,
    HomeIcon,
    DiscountIcon,
    PieChartIcon,
    MailIcon,
    BillIcon,
    SettingsIcon,
    ExitIcon
} from '../../Components/SidebarIcons/SidebarIcons';

import './Sidebar.scss'

const Sidebar = () => {

    return(
        <div className="sidebar">
            <MainLogo/>
            <Link to="/pop"><HomeIcon/></Link>
            
            <DiscountIcon/>
            <PieChartIcon/>
            <MailIcon/>
            <BillIcon/>
            <SettingsIcon/>
            <ExitIcon/>
        </div>
    )
}

export default Sidebar;