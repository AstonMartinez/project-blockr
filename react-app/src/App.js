import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import UserDashboard from "./components/UserDashboard";
import LandingPage from "./components/LandingPage";
import DailyTrivia from "./components/DailyTrivia";
import DailyPlanner from "./components/DailyPlanner";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/planner'>
            <DailyPlanner />
          </Route>
          <Route exact path = '/trivia'>
            <DailyTrivia />
          </Route>
          <Route exact path = '/'>
            <LandingPage />
          </Route>
          <Route exact path = '/dashboard'>
            <UserDashboard />
          </Route>
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
