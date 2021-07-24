import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScheduleInterview from "./ScheduleInterview";
import InterviewDetails from "./InterviewDetails";
import RescheduleInterview from "./RescheduleInterview";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/schedule">
              <ScheduleInterview />
            </Route>
            <Route path="/schedule">
              <ScheduleInterview />
            </Route>
            <Route path="/interview/:uuid">
              <InterviewDetails />
            </Route>
            <Route path="/reschedule/:uuid">
              <RescheduleInterview />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
