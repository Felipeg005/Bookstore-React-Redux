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
        <Route path="/Bookstore-React-Redux/" exact component={Home}></Route>
        <Route path="/Bookstore-React-Redux/categories" component={CategoriesPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
