const StatisticsCard = ({ titleIcon, changingAmount, PointerSign, amount, cardTitle  }) => {
    return (
        <div className="statistics">
            <div className="statistics-top">
                <div>{titleIcon}</div>
                <p className="changing-amount">{changingAmount}</p>
                <div>{PointerSign}</div>
            </div>
            <h3 className="amount">{amount}</h3>
            <p className="card-title">{cardTitle}</p>
        </div>
    )
}

export default StatisticsCard;