import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Contents from './routes/Contents';
import Member from './routes/Member';

// import Information from './components/Information';
// import Login from './components/Login';


const App = () => {
  return (
    <Router>
      <div>
        {/* <Information></Information>
        <Login></Login> */}
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contents" component={Contents}/>
            <Route path="/member" component={Member}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
