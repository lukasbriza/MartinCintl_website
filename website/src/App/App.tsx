import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { PageContextProvider, AnimationContextProvider } from '../Functions/Context'
///////////////////////////////////////////////////
//COMPONENTS//
import { PageRoutes } from './PageRoutes'
///////////////////////////////////////////////////
//BROWSER HISTORY//
export const history = createBrowserHistory()
///////////////////////////////////////////////////



function App() {
  return (
    <div className="App">
      <PageContextProvider>
        <AnimationContextProvider>
          <Router history={history}>
            <PageRoutes />
          </Router>
        </AnimationContextProvider>
      </PageContextProvider>
    </div>
  );
}

export default App;
