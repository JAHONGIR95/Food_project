import './ReportData.scss';

const ReportData = ({ photo, customerName, menuOrder, totalPayment, process }) => {
    return(
        <div className="report-data">
            <img src={photo} alt="" className="photo"/>
            <p className="name">{customerName}</p>
            <p className="menu-order">{menuOrder}</p>
            <p className="total-payment">{totalPayment}</p>
            <p className="process">{process}</p>
        </div>
    )
}

export default ReportData;