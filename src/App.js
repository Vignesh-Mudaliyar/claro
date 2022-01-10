import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClaroWelcomePage from "./pages/Claro/ClaroWelcomePage";
import routes from './routes';
import './assets/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path='/' exact component={ClaroWelcomePage} /> */}
       
        {routes.map((route, i) => (
              <Route
                path={route.path}
                name={route.name}
                exact={route.exact}
                render={(props) => <route.component {...props} />}
                key={i}
              />
            ))}

    
      </Switch>
    </Router>
  );
}

export default App;
