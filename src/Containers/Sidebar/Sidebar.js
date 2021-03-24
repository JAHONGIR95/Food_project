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
           <h1>Sidebar</h1>
        </div>
    )
}

export default Sidebar;