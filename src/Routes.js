import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Loading } from "./components";
import Login from "./pages/Login/Login";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const AboutLazy = lazy(() => import("./pages/About/About"));
const AddStudentLazy = lazy(() => import("./pages/AddStudent/AddStudent"));

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={HomeLazy} />
          <Route exact path="/about" component={AboutLazy} />
          <Route exact path="/add-student" component={AddStudentLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
