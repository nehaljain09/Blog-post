import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Create } from "./components/create";
import { Footer } from "./components/footer";
import Header from "./components/header";
import { Account } from "./pages/account";
import { Details } from "./pages/details";
import Home from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/login/register";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/create" component={Create} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
