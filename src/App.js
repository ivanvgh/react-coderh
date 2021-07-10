import './App.css';
import { MenuAppBar } from './components/Navbar';
import { ItemListContainer } from './container/ItemListContainer';

function App() {
  return (
    <>
      <MenuAppBar />
      <ItemListContainer greeting="Weolcome to VanQuor Store." />
    </>
  );
}

export default App;
