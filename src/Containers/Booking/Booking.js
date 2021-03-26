import './Booking.scss';

const Booking = () => {
    return(
        <div className="booking">
            <div className="booking-top">
                <div className="img">{image}</div>
                <div className="top-data">
                    <p className="booking-name">{bookingName}</p>
                    <p className="booking-price">{bookingPrice}</p>
                </div>
                <span className="counter">{counter}</span>
                <p className="total-price">{totalPrice}</p>
            </div>
            <div className="booking-bottom">
                <textarea className="order-note">{orderNote}</textarea>
                <button>{}</button>
            </div>
        </div>
    )
}

export default Booking;