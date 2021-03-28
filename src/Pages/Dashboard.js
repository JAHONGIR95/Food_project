import Header from '../Containers/Header/Header';
import StatisticsCard from '../Components/StatisticsCard/StatisticsCard';

import titleIcon1 from '../Assets/images/icons/titleIcon1.svg';
// import titleIcon2 from '../Assets/images/icons/titleIcon2.svg';
// import titleIcon3 from '../Assets/images/icons/titleIcon3.svg';
import up from '../Assets/images/icons/up.svg';
// import down from '../Assets/images/icons/down.svg';

import './Pages.scss';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-left">
                <Header headerName="Dashboard" headerDate="Tuesday 2 Feb, 2021"/>
                <StatisticsCard titleIcon={titleIcon1} changingAmount="+32.40%" PointerSign={up} amount="$10,243.00" cardTitle="Total Revenue"/>
            </div>
            <div className="dashboard-right">

            </div>
        </div>
    )
}

export default Dashboard;