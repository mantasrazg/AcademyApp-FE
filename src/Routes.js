import React, { Suspense, lazy, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

import { Header, Loading, PrivateRoute } from "./components";
import Login from "./pages/Login/Login";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const AboutLazy = lazy(() => import("./pages/About/About"));
const StudentsLazy = lazy(() => import("./pages/Students/Students"));
const AddStudentLazy = lazy(() => import("./pages/AddStudent/AddStudent"));
const CoursesLazy = lazy(() => import("./pages/Courses/Courses"));
const AddCourseLazy = lazy(() => import("./pages/AddCourse/AddCourse"));

function Routes() {
  const authFunc = useContext(AuthContext);

  return (
    <Router>
      <Header
        loggedIn={!!authFunc.token}
        logout={() => {
          authFunc.setToken("");
        }}
      />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={HomeLazy} />
          <Route exact path="/about" component={AboutLazy} />
          <PrivateRoute
            exact
            path="/students"
            component={StudentsLazy}
            redirectPath="/login"
          />
          <PrivateRoute
            exact
            path="/add-student"
            component={AddStudentLazy}
            redirectPath="/login"
          />
          <PrivateRoute
            exact
            path="/courses"
            component={CoursesLazy}
            redirectPath="/login"
          />
          <PrivateRoute
            exact
            path="/add-course"
            component={AddCourseLazy}
            redirectPath="/login"
          />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
