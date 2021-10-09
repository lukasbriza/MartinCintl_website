import {Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
///////////////////////////////////////////////////
//COMPONENTS//
import {PageRoutes} from './PageRoutes'
///////////////////////////////////////////////////
//BROWSER HISTORY//
export const history = createBrowserHistory()
///////////////////////////////////////////////////

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <PageRoutes/>
      </Router>
    </div>
  );
}

export default App;
