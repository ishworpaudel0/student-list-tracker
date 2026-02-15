
import './App.css'
import Header from './Components/Header';
import StudentDisplay from './pages/StudentDisplay';
import logophoto from'./assets/logo.jpg'
import StudentItem from './pages/StudentForm';
import { Route, Routes } from 'react-router-dom'
import StudentDetailDisplay from './pages/StudentDetailDisplay';
import StudentEdit from './pages/StudentEdit';
import StudentDetailLayout from './pages/StudentDetailLayout';
function App() {

  return (
    <div className='Student-WholeList'>
    <Header title="Student Tracking App" description="This is an App to keep track of student in ABC school." logo={logophoto}/>
    <Routes>
      <Route index element={<StudentDisplay />} />
      <Route path="list" element={<StudentDisplay />} />
      <Route path= "add" element={<StudentItem />} />

      <Route path='/item/:id' element={<StudentDetailLayout />}>
        <Route index element={<StudentDetailDisplay />} />
        <Route path='edit' element={<StudentEdit />} />
      </Route>
    </Routes>
    
    </div>
  )
}

export default App;
