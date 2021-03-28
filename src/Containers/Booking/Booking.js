import deleteBtn from '../../Assets/images/icons/del.svg';

import './Booking.scss';

const Booking = ({ mealImage, bookingName, bookingPrice, counter, totalPrice, orderNote }) => {
    return(
        <div className="booking">
            <div className="booking-top">
                <img src={mealImage} className="img" />
                <div className="top-data">
                    <p className="booking-name">{bookingName}</p>
                    <p className="booking-price">{bookingPrice}</p>
                </div>
                <span className="counter">{counter}</span>
                <p className="total-price">{totalPrice}</p>
            </div>
            <div className="booking-bottom">
                <textarea className="order-note">{orderNote}</textarea>
                <button><img src={deleteBtn} className="delete-button" alt=""/></button>
            </div>
        </div>
    )
}

export default Booking;