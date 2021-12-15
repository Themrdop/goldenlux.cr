import NavBar from './Components/NavBar';
import Introduccion from './Components/Introduccion';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from "./Components/Test";


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Introduccion} />
          <Route path="/Test" component={Test} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
