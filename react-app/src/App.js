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
import UserProfile from "./components/UserProfile";
import CardSet from "./components/FlashCards/CardSet";
import Footer from "./components/Footer";
import CreateSet from "./components/CreateSet";

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
          <Route exact path='/user'>
            <UserProfile />
          </Route>
          <Route exact path='/practice'>
            <Practice />
          </Route>
          {/* <Route exact path='/resources'>
            <ResourcesComponent />
          </Route> */}
          <Route exact path='/flashcards'>
            <FlashCards />
          </Route>
          <Route exact path='/schedule'>
            <WeeklySchedule />
          </Route>
          <Route exact path='/trivia'>
            <DailyTrivia />
          </Route>
          <Route exact path='/'>
            <UserDashboard />
          </Route>
          <Route exact path='/dashboard'>
            <UserDashboard />
          </Route>
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/sets/new'>
            <CreateSet />
          </Route>
          <Route exact path='/sets/:setId'>
            <CardSet />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
