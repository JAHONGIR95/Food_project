import Header from '../Containers/Header/Header';
import Navbar from '../Containers/Navbar/Navbar';
import Select from '../Components/Extras/Select';
import './Pages.scss';

const Homepage = () => {
    return (
        <div className="homepage"> 
            <div className="homepage-main">
                <Header headerName="Jaegar Resto" headerDate="Tuesday, 2 Feb 2021"/>
                <Navbar/>
                <div className="selection">
                    <h3 className="selection-title">Choose Dishes</h3>
                    <Select/>
                </div>
            </div> 
            <div className="homepage-right">
                dkfkdjfk
            </div>
        </div>
    )
}

export default Homepage;