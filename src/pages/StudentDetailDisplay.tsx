import { useNavigate, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import useStudentTracker from '../hooks/useStudentTracker';

import './StudentDetailDisplay.css'

const StudentDetailDisplay = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { StudentList, handdleDelete } = useStudentTracker();

    // Finding the single student based on the URL ID
    const item = useMemo(() => {
        return StudentList.find(s => String(s.id) === String(id));
    }, [id, StudentList]);

    const onDelete = (studentId: string) => {
        handdleDelete(studentId);
        navigate("/");
    };

    const onEdit = () => {
        navigate(`/item/${id}/edit`);
    }

    // Handle case where student isn't found
    if (!item) {
        return <div className="error">Student not found.</div>;
    }

    return (
        <div className='student-detail-view'>
            <h2 className='student-detail__header'>Student Profile</h2>
            
            <div className="student-detail-card">
                <img src={item.photo} alt={item.name} className="detail-img" />
                
                <div className='detail-info'>
                    <h1>{item.name}</h1>
                    <p><strong>Grade:</strong> {item.grade}</p>
                    <p><strong>Gender:</strong> {item.gender}</p>
                    <p><strong>Phone:</strong> {item.phoneno}</p>
                    
                    <div className="marks-display">
                        <h3>Academic Performance</h3>
                        <ul>
                            <li>Math: {item.Marks.Math}</li>
                            <li>Science: {item.Marks.Science}</li>
                            <li>English: {item.Marks.English}</li>
                            <li>Nepali: {item.Marks.Nepali}</li>
                        </ul>
                    </div>
                </div>

                <div className="detail-actions">
                    <button className='edit-btn' onClick={onEdit}>Edit Profile</button>
                    <button className='delete-btn' onClick={() => onDelete(item.id)}>Delete Student</button>
                </div>
            </div>
        </div>
    )
}

export default StudentDetailDisplay;