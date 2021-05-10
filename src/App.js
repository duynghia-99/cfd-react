import { BrowserRouter, Route, Switch} from "react-router-dom";
import { Footer, Header } from './component';
import Cooperate from './page/cooperate';
import Course from './page/course';
import CourseDetail from './page/course-detail';
import Email from './page/email';
import FagPage from './page/faqpage';
import Home from './page/home';
import Error from './page/404';
import IntroduceCoin from './page/introduce-coin';
import Profile from './page/profile';
import Team from "./page/team";
import Register from "./page/register";
import Project from "./page/project";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/cooperate">
            <Cooperate/>
          </Route>
          <Route path="/course">
            <Course/>
          </Route>
          <Route path="/courseDetail">
            <CourseDetail/>
          </Route>
          <Route path="/fagPage">
            <FagPage/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/email">
            <Email/>
          </Route>
          <Route path="/introduceCoin">
            <IntroduceCoin/>
          </Route>
          <Route path="/project">
            <Project/>
          </Route>
          <Route path="/team">
            <Team/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route component={Error}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>

  );
}


export default App;
