import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Loading from "./components/loading";
import navbar from "./components/navbar";
import Home from "./views/Home";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import './App.css';

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
  <Router history={history}>
    <div id="app" className="d-flex flex-column h-100">
      <navbar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Container>
    </div>
  </Router>
);
};

export default App;
