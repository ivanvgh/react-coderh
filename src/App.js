import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ItemDetailsContainer from './components/ItemDetailsContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/item/:id" component={ItemDetailsContainer} />
        <Route exact path="/category/:id" component={ItemListContainer} />
        <Route path="/" component={ItemListContainer} />
      </Switch>
    </Router>
  );
}

export default App;
