import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Space from './components/space/blackSpace'
import PlanetMoon from './components/space/planetMoon'
import PlanetMars from './components/space/planetMars'
import PlanetDusty from './components/space/planetDusty'
import PlanetDark from './components/space/planetDark'




function App() {
  return (
    <BrowserRouter>
    <div className="App">
  { /* <Navbar /> */}
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/space' component={Space} />
        <Route path='/planetM1' component={PlanetMoon} />
        <Route path='/planetRed' component={PlanetMars} />
        <Route path='/planetBlue' component={PlanetDusty} />
        <Route path='/planetDark' component={PlanetDark} />

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
