import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './SearchPage';
import ProfilePage from './ProfilePage';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={SearchPage}/>
          <Route path="/playerprofile/:playerName" component={ProfilePage}/>
        </Switch>
      </Router>
  );
}

export default App;
