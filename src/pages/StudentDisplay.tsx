
import './StudentDisplay.css'
import useStudentTracker from '../hooks/useStudentTracker';
const StudentDisplay =() =>{
    const {StudentList, handdleDelete} = useStudentTracker();

    return (
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
