import { Link } from 'react-router-dom';

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
            <Link to="/"><HomeIcon/></Link>
            <DiscountIcon/>
            <Link to="/dashboard"><PieChartIcon/></Link>
            <MailIcon/>
            <BillIcon/>
            <Link to="/settings"><SettingsIcon/></Link>
            <ExitIcon/>
        </div>
    )
}

export default Sidebar;