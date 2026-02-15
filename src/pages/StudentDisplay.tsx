
import './StudentDisplay.css'
import useStudentTracker from '../hooks/useStudentTracker';

const StudentDisplay =() =>{
    const {StudentList, handdleDelete, handdleDetail} = useStudentTracker();

    return (
            <div className='studen-listing'>
                <h2 className='student-listing__Header'>Student List</h2>
            <div className='student-list-container'>
                {StudentList.slice().sort((a, b) => a.name.localeCompare(b.name)).map(item => (
                    <div className="student-card" key={item.id}>
                        
                        <img src={item.photo} alt={item.name} className="student-card__img" />
                        <div className='student-info'>
                            <p className='student-list__name'>{item.name}</p>
                            <div className='student-list__meta'>
                                <p className='student-list__grade'><span>Grade:</span>{item.grade}</p>
                                <p className='student-list__phoneno'><span>Phone:</span>{item.phoneno}</p>
                                <p className='student-list__gender'><span>Gender:</span>{item.gender}</p>
                            </div>
                        </div>
                        <button className='student-list__view-detail' onClick={() => handdleDetail(item.id)}>View Detail  </button>
                        <button className='student-list__delete' onClick={() => handdleDelete(item.id)}>
                            Delete
                        </button>
                    </div>    
                ))}
            </div>
            </div>
            
    )

}
export default StudentDisplay
