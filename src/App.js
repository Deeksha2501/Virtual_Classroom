import React from 'react';

import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import Home from './home/homepage'
import SignUp from './signup/signup'
import SignIn from './signin';
import Contact from './Contact/Contact'
import Camps from './Contact/Camps'
import DropCentre from './Contact/DropCentre';
import GetInvolved from './getInvolved/getinvolved';
import Donate from './donate/donate'
import Faq from './Faq/Faq';
function App() {
  return (
    <div >
      <BrowserRouter>
    
    <Switch>
       <Route exact path='/' component={Home}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/signin' component={SignIn}/>
      <Route exact path='/contact/write'><Contact /></Route>
      <Route exact path='/contact/drop-centre' component={DropCentre} />
      <Route exact path='/contact/camps'><Camps /></Route>
      <Route path='/getInvolved'><GetInvolved/></Route>
      <Route path='/donate'><Donate/></Route>
      <Route path='/faq'><Faq/></Route>

    </Switch>
    
 </BrowserRouter>   
    </div>
  );
}

export default App;
