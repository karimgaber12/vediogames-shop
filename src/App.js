import './App.css';
import HomePage from './pages/homePage/Homepage.component'
import {Route , Switch} from 'react-router-dom'
import Shop from './pages/shop/Shop.component';
function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={Shop} />
    </Switch>
    </div>
  );
}

export default App;
