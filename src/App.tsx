import './App.css'
import Header from './Components/Header';
import StudentList from './Components/StudentList';
import logophoto from'./assets/logo.jpg'

function App() {

  return (
    <div className='Student-WholeList'>
    <Header title="Student Tracking App" description="This is an App to keep track of student in ABC school." logo={logophoto}/>
    <StudentList />
    </div>
  )
}

export default App;
