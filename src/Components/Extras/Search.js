import search from '../../Assets/images/icons/search.png';
import './extra.scss';
const Search = () => {
    return (
        <div className="search">
            <img src={search} alt=""/>
            <input className="search-input" type="search" placeholder="Seach for food, coffee"/>
        </div>
    )
}

export default Search;