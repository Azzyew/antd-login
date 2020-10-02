import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { Layout } from 'antd';

import Home from "./views/Home";
import Login from "./views/Login";
import "./App.css";

const { Content } = Layout;

const App = () => {
    
  const { isAuthenticated} = useAuth0();
    
    return(

      <Layout className="layout">
        
        <Content className='main'>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Login />
              </Route>
              <Route exact path='/home'>
                  {isAuthenticated && <Home/>}
                </Route>
            </Switch>
          </Router>

        </Content>
      </Layout>
    )
  }

export default App;