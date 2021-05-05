import { Footer, Header } from './component';
import Course from './page/course';
import CourseDetail from './page/course-detail';
import Home from './page/home';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      {/* <Course/> */}
      <CourseDetail/>
      <Footer/>
    </div>
  );
}


export default App;
