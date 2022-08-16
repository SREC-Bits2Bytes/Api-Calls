import logo from './logo.svg';
import './App.css';
import AxGetfetchCourseAllocated from './components/AxGetfetchCourseAllocated';
import AxGetFetchStudEntryAtt from './components/AxGetFetchStudEntryAtt';
import AxGetStudHostelEntryAtt from './components/AxGetStudHostelEntryAtt';
import AxPostFetchTutoredStud from './componentsPost/AxPostFetchTutoredStud';
import AxGetProfile from './components/AxGetProfile';
import AxPostFetchStudDetails from './componentsPost/AxPostFetchStudDetails';
import AxPostMarkSubjectAtt from './componentsPost/AxPostMarkSubjectAtt';
import AxPostCreateSubject from './componentsPost/AxPostCreateSubject';
import AxGetSubjectAtt from './components/AxGetSubjectAtt';
import AxPostAddStudSubject from './componentsPost/AxPostAddStudSubject';

function App() {

  return (
    <div className="App">
      {/* <AxGetfetchCourseAllocated/> */}
      {/* <AxGetFetchStudEntryAtt/> */}
      {/* <AxGetStudHostelEntryAtt/> */}
      {/* <AxGetProfile/> */}
      <AxGetSubjectAtt/>

      {/* <AxPostMarkSubjectAtt/>*/}
      {/* <AxPostAddStudentSubject/>  */}
      {/* <AxPostAddStudSubject/> */}
      {/* <AxPostCreateSubject/> */}
      {/* <AxPostFetchStudDetails/>  */}
      {/* <AxPostFetchTutoredStud/> */}
    </div>

  )
  }

export default App;
