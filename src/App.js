import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects/Projects';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <Home />} />
          <Route exact path='/resume' render={(props) => <Resume />} />
          <Route exact path='/projects' render={(props) => <Projects />} />
        </Switch>
      </Router>
    </div>
  );
}
