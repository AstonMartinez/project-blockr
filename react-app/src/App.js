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
import FlashCards from "./components/FlashCards";
import ResourcesComponent from "./components/ResourcesComponent";
import Practice from "./components/Practice";
import WeeklySchedule from "./components/WeeklySchedule";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path='/practice'>
          <Navigation isLoaded={isLoaded} />
            <Practice />
          </Route>
          <Route exact path='/resources'>
          <Navigation isLoaded={isLoaded} />
            <ResourcesComponent />
          </Route>
          <Route exact path='/flashcards'>
          <Navigation isLoaded={isLoaded} />
            <FlashCards />
          </Route>
          <Route exact path='/schedule'>
          <Navigation isLoaded={isLoaded} />
            <WeeklySchedule />
          </Route>
          <Route exact path = '/trivia'>
          <Navigation isLoaded={isLoaded} />
            <DailyTrivia />
          </Route>
          <Route exact path = '/'>
          <Navigation isLoaded={isLoaded} />
            <LandingPage />
          </Route>
          <Route exact path = '/dashboard'>
            <UserDashboard />
          </Route>
          <Route exact path="/login" >
          <Navigation isLoaded={isLoaded} />
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
          <Navigation isLoaded={isLoaded} />
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
