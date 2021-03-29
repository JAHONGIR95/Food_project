import './extra.scss';

const Select = ({ Theme }) => {
    return (
        <div className="select">
            <select name="#" id="#">
                <option value="One">{Theme}</option>
                <option value="Two">One</option>
                <option value="Three">Two</option>
                <option value="Four">Three</option>
            </select>
        </div>
    )
}

export default Select;