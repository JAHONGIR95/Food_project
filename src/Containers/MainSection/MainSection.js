import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Dashboard from '../MainSection/MainSection';
import Sidebar from '../Sidebar/Sidebar';


import './MainSection.scss';

const MainSection = () => {
    return (
        
        <Router>
            <div className="main-section">
                <Sidebar/>

                <Switch>
                    <Route path="/pop" component={Dashboard} />
                </Switch>
                <MainSection/>
            </div>
        </Router>

    )
}

export default MainSection;