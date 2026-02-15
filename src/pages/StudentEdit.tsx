import StudentFormComponent from '../Components/StudentFormComponent'
import './StudentEdit.css'
import { useParams, useNavigate } from 'react-router-dom';
import useStudentTracker from '../hooks/useStudentTracker';
import type { StudentList } from '../hooks/useStudentTracker';

const StudentEdit = () => {
    const { StudentList, setStudentList } = useStudentTracker();
    const { id } = useParams();
    const navigate = useNavigate();

    const currentStudent = StudentList.find(student => student.id === id);

    const handleUpdateStudent = (updatedData: Omit<StudentList, 'id'>) => {
        const updatedList = StudentList.map((student) => {
            if (student.id === id) {
                return { ...updatedData, id: student.id };
            }
            return student;
        });

        setStudentList(updatedList);
        alert("Student details updated successfully!");
        
        navigate('/list');
    };

    if (!currentStudent) {
        return <div className="error-message">Student not found or loading...</div>;
    }

    return (
        <div className='Form-edit'>
            <h2 className='Form-Edit-Heading'>Edit Student Details</h2>
            <StudentFormComponent
                initialData={currentStudent}
                onSubmit={handleUpdateStudent}
                buttonText='Save Changes'
            /> 
        </div>
    )
}

export default StudentEdit;