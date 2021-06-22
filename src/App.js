import logo from './logo.svg';
import './App.css';
import MainScreen from './component/MainScreenComponent/MainScreen';
import { BrowserRouter as Router,Switch, Route,MemoryRouter } from 'react-router-dom';
import NavigationBar from './component/Navigation/NavigationBar';
import Cupboard from './component/Screens/Cupboard/Cupboard';
function App() {
  return (
    <div 
    // className="App"
    >
      <MemoryRouter>
       <Router>       
        <NavigationBar/>
        <Switch>
        <Route path='/' exact component={MainScreen} />
        
          {/* <Route path='/' >
            <MainScreen />
            </Route> */}
        <Route path='/cupboard' component={Cupboard} />
        {/* <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
      </Router>
      </MemoryRouter>
    </div>
  );
}

export default App;
