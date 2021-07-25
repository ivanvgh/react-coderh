import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ItemDetailsContainer from './components/ItemDetailsContainer';
import { CartProvider } from './contexts/CartContext';
import { CartContainer } from './components/CartContainer';
import { CheckoutContainer } from './components/CheckoutContainer';
import { OrderContainer } from './components/OrderContainer';

function App() {
  return (
    <CartProvider>
      <Router>
        <Switch>
          <Route exact path="/order" component={OrderContainer} />
          <Route exact path="/checkout" component={CheckoutContainer} />
          <Route exact path="/cart" component={CartContainer} />
          <Route exact path="/item/:id" component={ItemDetailsContainer} />
          <Route exact path="/category/:id" component={ItemListContainer} />
          <Route path="/" component={ItemListContainer} />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
