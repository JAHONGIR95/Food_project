import './StatisticsCard.scss';

const StatisticsCard = ({ titleIcon, changingAmount, PointerSign, amount, cardTitle  }) => {
    return (
        <div className="statistics">
            <div className="statistics-top">
                <img src={titleIcon} className="title-icon" alt=""/>
                <p className="changing-amount">{changingAmount}</p>
                <img src={PointerSign} alt=""/>
            </div>
            <h3 className="amount">{amount}</h3>
            <p className="card-title">{cardTitle}</p>
        </div>
    )
}

export default StatisticsCard;