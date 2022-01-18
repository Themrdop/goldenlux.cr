import NavBar from './Components/NavBar';
import Introduccion from './pages/Introduccion';
import Footer from './Components/Footer';
import { Switch, Route } from 'react-router-dom';
import Test from "./pages/Test";
import RealState from './pages/RealState';


function App() {
  return (
    <div>
        <NavBar />
        <Switch>
          <Route path="/" exact >
            <Introduccion/>
          </Route>
          <Route path="/Test">
            <Test/>
          </Route>
          <Route path="/RealState">
            <RealState/>
          </Route>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
