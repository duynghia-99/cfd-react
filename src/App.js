import { Footer, Header } from './component';
import Cooperate from './page/cooperate';
import Course from './page/course';
import CourseDetail from './page/course-detail';
import Email from './page/email';
import FagPage from './page/faqpage';
import Home from './page/home';
import Error from './page/home/404';
import IntroduceCoin from './page/introduce-coin';
import Profile from './page/profile';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      {/* <Course/> */}
      {/* <CourseDetail/> */}
      {/* <FagPage/> */}
      {/* <Error/> */}
      {/* <Email/> */}
      {/* <IntroduceCoin/> */}
      {/* <Cooperate/> */}
      <Profile/>
      <Footer/>
    </div>
  );
}


export default App;
