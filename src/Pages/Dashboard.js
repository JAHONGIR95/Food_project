import Header from '../Containers/Header/Header';
import StatisticsCard from '../Components/StatisticsCard/StatisticsCard';
import ReportData from '../Components/ReportData/ReportData';
import MostOrdered from '../Components/Extras/MostOrdered';
import Select from '../Components/Extras/Select';

import titleIcon1 from '../Assets/images/icons/titleIcon1.svg';
import titleIcon2 from '../Assets/images/icons/titleIcon2.svg';
import titleIcon3 from '../Assets/images/icons/titleIcon3.svg';
import up from '../Assets/images/icons/up.svg';
import down from '../Assets/images/icons/down.svg';

import Customer1 from '../Assets/images/customer1.png';
import Customer2 from '../Assets/images/customer2.png';
import Customer3 from '../Assets/images/customer3.png';
import Customer4 from '../Assets/images/customer4.png';
import Customer5 from '../Assets/images/customer5.png';

import Meal from '../Assets/images/meal1.png'

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
                        <h3 className="header-title">Order Report</h3>
                    </div>

                    <div className="report-navbar">
                        <a href="javascript:void(0)" className="nav-link">Customer</a>
                        <a href="javascript:void(0)" className="nav-link">Menu</a>
                        <a href="javascript:void(0)" className="nav-link">Total Payment</a>
                        <a href="javascript:void(0)" className="nav-link">Status</a>
                    </div>

                    <div className="customer-data">
                        <ReportData photo={Customer1} customerName="Eren Jaegar" menuOrder="Spicy seasoned seafood noodles" totalPayment="$125" process="Completed"/>
                        <ReportData photo={Customer2} customerName="Eren Jaegar" menuOrder="Spicy seasoned seafood noodles" totalPayment="$125" process="Completed"/>
                        <ReportData photo={Customer3} customerName="Eren Jaegar" menuOrder="Spicy seasoned seafood noodles" totalPayment="$125" process="Completed"/>
                        <ReportData photo={Customer4} customerName="Eren Jaegar" menuOrder="Spicy seasoned seafood noodles" totalPayment="$125" process="Completed"/>
                        <ReportData photo={Customer1} customerName="Eren Jaegar" menuOrder="Spicy seasoned seafood noodles" totalPayment="$125" process="Completed"/>                        
                        <ReportData photo={Customer5} customerName="Eren Jaegar" menuOrder="Spicy seasoned seafood noodles" totalPayment="$125" process="Completed"/>
                        <ReportData photo={Customer2} customerName="Eren Jaegar" menuOrder="Spicy seasoned seafood noodles" totalPayment="$125" process="Completed"/>

                    </div>

                </div>
            </div>
            <div className="dashboard-right">
                <div className="most-orders">
                    <div className="most-orders-header">
                        <p className="header-title">Most Ordered</p>
                        <Select Theme="Today"/>
                    </div>
                    <MostOrdered orderedMealImage={Meal} orderedMeal="Spicy seasoned seafood noodles" mealCount="200 dishes ordered"/>
                    <MostOrdered orderedMealImage={Meal} orderedMeal="Spicy seasoned seafood noodles" mealCount="200 dishes ordered"/>
                    <MostOrdered orderedMealImage={Meal} orderedMeal="Spicy seasoned seafood noodles" mealCount="200 dishes ordered"/>
                    
                    <button className="view-all">View All</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;