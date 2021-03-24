import Sidebar from '../Containers/Sidebar/Sidebar';
import MainSection from '../Containers/MainSection/MainSection';

import './Pages.scss';

const Homepage = () => {
    return (
        <div className="homepage">
            <Sidebar/>
            <MainSection/>
        </div>
    )
}

export default Homepage;