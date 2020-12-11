import { Switch, Route } from 'react-router-dom';
import  Home from './Components/Home'
import Signin from './Components/Signin';
import ClientRegistered from './Components/ClientRegistered';
import RegisterClient from './Components/RegisterClient';
import NotFound from './Components/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/signin" component={Signin} />
       <Route exact path="/client-registered" component={ClientRegistered} />
       <Route exact path="/register-client" component={RegisterClient} />
       <Route component={NotFound} />
     </Switch>
    </div>
  );
}

export default App;
