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
import { ConfirmCheckoutContainer } from './components/ConfirmCheckoutContainer';
import { OrderContainer } from './components/OrderContainer';
import { SnackbarProvider } from 'notistack';
import { Slide } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { blueGrey, teal } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[900]
    },
    secondary: {
      main: teal[700]
    },
  },
  typography: {
    fontFamily: 'Manrope',
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700,
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <SnackbarProvider
          maxSnack={3}
          // anchorOrigin={{
          //   vertical: 'down',
          //   horizontal: 'right',
          // }}
          iconVariant={{
            success: '✅ ',
            error: '✖️ ',
            warning: '⚠️ ',
            info: 'ℹ️ ',
          }}
          TransitionComponent={Slide}
        >
          <Router>
            <Switch>
              <Route exact path="/order" component={OrderContainer} />
              <Route exact path="/checkout" component={CheckoutContainer} />
              <Route exact path="/confirm-checkout" component={ConfirmCheckoutContainer} />
              <Route exact path="/cart" component={CartContainer} />
              <Route exact path="/item/:id" component={ItemDetailsContainer} />
              <Route exact path="/category/:id" component={ItemListContainer} />
              <Route path="/" component={ItemListContainer} />
            </Switch>
          </Router>
        </SnackbarProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
