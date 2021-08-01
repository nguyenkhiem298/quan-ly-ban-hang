import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

import routers from './routers'

function App() {
  return (
    <Router>
      <Switch>
        {
          routers.map( (item, index) => (
            <Route
              key={index}
              path={item.path}
              exact={item.exact}
              component={ (props) => {
                return (
                  <item.layout {...props}>
                    <item.component {...props} />
                  </item.layout>
                )
              }}
            />
          ))
        }
      </Switch>
    </Router>
  );
}

export default App;
