import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Slide from './Slide'
import Heading from './Heading'
import Contact from './Contact';
import Home from './Home';
import About from './About'
import Ser from './Ser'
import Sign from './Sign'
import By from './By'
import Menu from './Menu'
import News from './News'
function App()
{
  return(
    <React.Fragment>
      
    <Heading/>
    <button type="button" class="btn btn-danger"><Menu/></button>
    
                <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/Con" component={Contact}/>
                        <Route exact path="/S" component={Sign}/>
                        <Route exact path="/N" component={News}/>
                        <Route component={Error}/>
                </Switch>
<br/>
<Slide/>
<br/>
<About/>
<br/>
<Ser/>
<br/>
<By/>

    </React.Fragment>
  );
}
export default App;
