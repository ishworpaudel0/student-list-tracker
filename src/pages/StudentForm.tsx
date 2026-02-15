
import './StudentForm.css';

import useStudentTracker from '../hooks/useStudentTracker';
import StudentFormComponent from '../Components/StudentFormComponent';

import type { StudentList } from '../hooks/useStudentTracker';


const StudentItem=()=>{
    const {handdleDelete, StudentList, setStudentList, handdleDetail} = useStudentTracker();
    const handleAddStudent = (formData: Omit<StudentList, 'id'>) => {
        const newStudent : StudentList= {
            ...formData,
            id: crypto.randomUUID(),
        };
        setStudentList(prevList => [...prevList, newStudent]);
        alert("Student Added Successfully!");
    };
    

    
        return(
            <div className='add-page-container'>
                <div className='form-column'>
                <h2 className='Form-Heading'>Add New Student</h2>
                <StudentFormComponent
                    onSubmit={handleAddStudent} 
                    buttonText="Add Student" 
                />
            </div>
            <div className='list-column'>
            <div className='studen-listing'>
                <h2 className='student-listing__Header'>Student List</h2>
            <div className='student-list-container'>
                {StudentList.slice().sort((a, b) => a.name.localeCompare(b.name)).map(item => (
                    <div className="student-card" key={item.id}>
                        
                        <img src={item.photo} alt={item.name} className="student-card__img" />
                        <div className='student-info'>
                            <p className='student-list__name'>{item.name}</p>
                            <p className='student-list__grade'>{item.grade}</p>
                            <p className='student-list__phoneno'>{item.phoneno}</p>
                            <p className='student-list__gender'>{item.gender}</p>
                        </div>
                        <button className='student-list__view-detail' onClick={() => handdleDetail(item.id)}>
                            View Detail
                        </button>
                        <button className='student-list__delete' onClick={() => handdleDelete(item.id)}>
                            Delete
                        </button>
                    </div>    
                ))}
            </div>
            </div>
            </div>
            </div>
        
            )
    }

export default StudentItem;