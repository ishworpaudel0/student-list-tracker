import { useState } from 'react';
import './StudentList.css'
type gender= "male" | "female" | "other";
interface StudentList{
    id:string;
    name:string;
    grade:string;
    phoneno:number;
    gender:gender;
}
const InitialStudentList: StudentList[]=[
    {
        id:"A101",
        name:"Ram Bhandari",
        grade:"A-",
        phoneno:9860111189,
        gender:"male"
    },
    {
        id:"A102",
        name:"Sita",
        grade:"B+",
        phoneno:9860111494,
        gender:"female"

    }
]
const StudentItem=()=>{
    const[StudentList,setStudentList]=useState<StudentList[]>(InitialStudentList);
        return(
            <div className='studen-listing'>
                <h2 className='student-listing__Header'>Student List</h2>

            
            <div className='student-list'>
                {StudentList.map(item=>(
                    <div className="student-list" key={item.id}>
                    <p className='student-list__name'>{item.name}</p>
                    <p className='student-list__grade'>{item.grade}</p>
                    <p className='student-list__phoneno'>{item.phoneno}</p>
                    <p className='student-list__gender'>{item.gender}</p>
                    </div>
                ))}
            </div>
            </div>
        
            )
        }
export default StudentItem;