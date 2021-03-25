import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Dashboard from './Dashboard';

import Sidebar from '../Containers/Sidebar/Sidebar';
import MainSection from '../Containers/MainSection/MainSection';

import './Pages.scss';

const Homepage = () => {
    return (
        <div className="homepage">  
            <Router>

                <Sidebar/>

                <Switch>
                    <Route path="/pop" component={Dashboard} />
                </Switch>
                <MainSection/>
            </Router>
        
        </div>
    )
}

export default Homepage;