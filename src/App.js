import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Home from './pages/Home';
import CategoriesPage from './pages/Categories-page';
import Nav from './components/Nav';

function App() {
  return (
    <Provider store={configureStore}>
      <Router>
        < Nav class='nav-menu'/>
        <Switch>
          <Route path="/Bookstore-React-Redux/" exact component={Home}></Route>
          <Route path="/Bookstore-React-Redux/categories" component={CategoriesPage}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
