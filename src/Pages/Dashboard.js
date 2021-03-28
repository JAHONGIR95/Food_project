import Header from '../Containers/Header/Header';
import StatisticsCard from '../Components/StatisticsCard/StatisticsCard';

import titleIcon1 from '../Assets/images/icons/titleIcon1.svg';
import titleIcon2 from '../Assets/images/icons/titleIcon2.svg';
import titleIcon3 from '../Assets/images/icons/titleIcon3.svg';
import up from '../Assets/images/icons/up.svg';
import down from '../Assets/images/icons/down.svg';

import './Pages.scss';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-left">
                <div className="dashboard-header">
                    <Header headerName="Dashboard" headerDate="Tuesday 2 Feb, 2021"/>
                </div>
                <div className="dashboard-data">
                    <StatisticsCard titleIcon={titleIcon1} changingAmount="+32.40%" PointerSign={up} amount="$10,243.00" cardTitle="Total Revenue"/>
                    <StatisticsCard titleIcon={titleIcon2} changingAmount="-12.40%" PointerSign={down} amount="23,456" cardTitle="Total Dish Ordered"/>
                    <StatisticsCard titleIcon={titleIcon3} changingAmount="+2.40%" PointerSign={up} amount="1,234" cardTitle="Total Customer"/>
                </div>

                <div className="report">
                    <div className="report-header">
                        <Header headerName="Order Report"/>
                    </div>

                    <div className="report-navbar">
                        <a href="javascript:void(0)" className="nav-link">Customer</a>
                        <a href="javascript:void(0)" className="nav-link">Menu</a>
                        <a href="javascript:void(0)" className="nav-link">Total Payment</a>
                        <a href="javascript:void(0)" className="nav-link">Status</a>
                    </div>
                    
                </div>
            </div>
            <div className="dashboard-right">

            </div>
        </div>
    )
}

export default Dashboard;