import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Homepage, Dashboard, Settings } from "../../Pages";

import "./MainSection.scss";

const MainSection = () => {
  return (
    <Router>
      <div className=".main-section">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
};

export default MainSection;
