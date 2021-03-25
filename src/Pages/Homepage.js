import Header from '../Containers/Header/Header';
import Navbar from '../Containers/Navbar/Navbar';
import './Pages.scss';

const Homepage = () => {
    return (
        <div className="homepage"> 
            <div className="homepage-main">
                <Header headerName="Jaegar Resto" headerDate="Tuesday, 2 Feb 2021"/>
                <Navbar/>
            </div> 
            <div className="homepage-right">
                dkfkdjfk
            </div>
        </div>
    )
}

export default Homepage;