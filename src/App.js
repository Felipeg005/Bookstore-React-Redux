import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CategoriesPage from './pages/Categories-page';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      < Nav class='nav-menu'/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/categories" component={CategoriesPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
