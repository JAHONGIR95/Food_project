// import { Link } from 'react-router-dom';

import Header from '../Containers/Header/Header';
import Navbar from '../Containers/Navbar/Navbar';
import Select from '../Components/Extras/Select';
import MealCard from '../Components/MealCard/MealCard';
import Search from '../Components/Extras/Search';
import Booking from '../Containers/Booking/Booking';

import MealPhoto from '../Assets/images/meal1.png';
// import Image from '../Assets/images/icons/'

import './Pages.scss';

const Homepage = () => {
    return (
        <div className="homepage"> 
            <div className="homepage-main">
                <div className="header1">
                    <Header headerName="Jaegar Resto" headerDate="Tuesday, 2 Feb 2021"/>
                    <Search/>
                </div>
                <Navbar/>
                <div className="selection">
                    <h3 className="selection-title">Choose Dishes</h3>
                    <Select Theme="Dine in"/>
                </div>
                <div className="meal-card-section">
                    <MealCard mealPhoto={MealPhoto} mealName="Spicy seasoned seafood noodles" mealPrice="$ 2.29" mealLeft="20 Bowls available"/>
                    <MealCard mealPhoto={MealPhoto} mealName="Spicy seasoned seafood noodles" mealPrice="$ 2.29" mealLeft="20 Bowls available"/>
                    <MealCard mealPhoto={MealPhoto} mealName="Spicy seasoned seafood noodles" mealPrice="$ 2.29" mealLeft="20 Bowls available"/>
                    <MealCard mealPhoto={MealPhoto} mealName="Spicy seasoned seafood noodles" mealPrice="$ 2.29" mealLeft="20 Bowls available"/>
                    <MealCard mealPhoto={MealPhoto} mealName="Spicy seasoned seafood noodles" mealPrice="$ 2.29" mealLeft="20 Bowls available"/>
                    <MealCard mealPhoto={MealPhoto} mealName="Spicy seasoned seafood noodles" mealPrice="$ 2.29" mealLeft="20 Bowls available"/>
                    <MealCard mealPhoto={MealPhoto} mealName="Spicy seasoned seafood noodles" mealPrice="$ 2.29" mealLeft="20 Bowls available"/>
                    <MealCard mealPhoto={MealPhoto} mealName="Spicy seasoned seafood noodles" mealPrice="$ 2.29" mealLeft="20 Bowls available"/>
                </div>
            </div> 
            <div className="homepage-right">
                <p className="order">Orders #34562</p>
                <div className="btn-line">
                    <button className="full-btn">Dine In</button>
                    <button className="empty-btn">To Go</button>
                    <button className="empty-btn">Delivery</button>
                </div>
                <div className="data-title-line">
                    <p className="item">Item</p>
                    <div className="data-right">
                        <p className="item">Qty</p>
                        <p className="item">Price</p>
                    </div>
                </div>
                 
                 <div className="booking-area">
                    <Booking mealImage={MealPhoto} bookingName="Spicy seasoned sea..." bookingPrice="$ 2.29" counter="2" totalPrice="$ 4,58" orderNote="Please, just a little bit spicy only."/>
                    <Booking mealImage={MealPhoto} bookingName="Spicy seasoned sea..." bookingPrice="$ 2.29" counter="2" totalPrice="$ 4,58" orderNote="Please, just a little bit spicy only."/>
                    <Booking mealImage={MealPhoto} bookingName="Spicy seasoned sea..." bookingPrice="$ 2.29" counter="2" totalPrice="$ 4,58" orderNote="Please, just a little bit spicy only."/>
                    <Booking mealImage={MealPhoto} bookingName="Spicy seasoned sea..." bookingPrice="$ 2.29" counter="2" totalPrice="$ 4,58" orderNote="Please, just a little bit spicy only."/>
                    <Booking mealImage={MealPhoto} bookingName="Spicy seasoned sea..." bookingPrice="$ 2.29" counter="2" totalPrice="$ 4,58" orderNote="Please, just a little bit spicy only."/>
                    <Booking mealImage={MealPhoto} bookingName="Spicy seasoned sea..." bookingPrice="$ 2.29" counter="2" totalPrice="$ 4,58" orderNote="Please, just a little bit spicy only."/>
                    <Booking mealImage={MealPhoto} bookingName="Spicy seasoned sea..." bookingPrice="$ 2.29" counter="2" totalPrice="$ 4,58" orderNote="Please, just a little bit spicy only."/>
                 </div>

                 <div className="homepage-right-bottom">
                     <div className="info-wrapper">
                        <div className="info">
                            <p className="title">Discount</p>
                            <p className="amount">$0</p>
                        </div>

                        <div className="info">
                            <p className="title">Sub total</p>
                            <p className="amount">$ 21,03</p>
                        </div>
                     </div>
                     <button className="payment">Continue to Payment</button>
                 </div>

            </div>
        </div>
    )
}

export default Homepage;