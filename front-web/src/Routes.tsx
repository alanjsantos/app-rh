import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/home";
import Documents from "./Documents/documents";
import Navbar from "./Navbar/navBar";
import Footer from "./Footer/footer";
import SendDocuments from "./SendDocuments/sendDocuments";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />

      <Switch>

        <Route path="/sendDocuments">
          <SendDocuments />
        </Route>

        <Route path="/documents">
          <Documents />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default Routes;
