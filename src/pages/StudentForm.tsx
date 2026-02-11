import { useState } from 'react';
import './StudentForm.css';
import ramphoto from '../assets/ram.jpeg'
import sitaphoto from '../assets/sita.jpeg'
import useStudentTracker from '../hooks/useStudentTracker';

export type Gender= "Male" | "Female" | "Other";
export interface StudentList{
    id:string;
    name:string;
    grade:string;
    phoneno:number;
    gender:Gender;
    photo: string;
}
export const InitialStudentList: StudentList[]=[
    {
        id:"A101",
        name:"Ram Bhandari",
        grade:"A-",
        phoneno:9860111189,
        gender:"Male",
        photo: ramphoto
    },
    {
        id:"A102",
        name:"Sita",
        grade:"B+",
        phoneno:9860111494,
        gender:"Female",
        photo:sitaphoto
    }
]
const StudentItem=()=>{
    const {handdleDelete, StudentList, setStudentList} = useStudentTracker();
    const[name,setName]=useState("");
    const[grade,setGrade]=useState("");
    const[phoneno,setphoneno]=useState<number>();
    const[gender,setGender]=useState<Gender>("Male");
    const [photo, setPhoto] = useState<string>("");
           const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            // Converts the local image file into a Base64 string for storage
            setPhoto(reader.result as string);
        };
        reader.readAsDataURL(file);
    }
};
  

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(name.trim() ===""){
            alert("Name is Required");
            console.log("Name is Required");
            return;
        }
        if(grade.trim() ===""){
            alert("Grade is Required");
            console.log("Grade is Required");
            return;
        }
        if (phoneno === undefined || isNaN(phoneno) || phoneno <= 0){
            alert("Enter Valid Phone Number");
            console.log("Enter Valid Phone Number");
            return;
        }
        const itemToAdd : StudentList = {
            id: crypto.randomUUID(),
            name,
            grade,
            phoneno,
            gender: gender,
            photo: photo
        }
        setStudentList(prev => [...prev,itemToAdd])
        setName("");
        setGrade("");
        setphoneno(undefined);
        setGender("Male");
        setPhoto("");
    }
    
        return(
            <div className='add-page-container'>
            <div className='form-column'>
            <div className='Form'>
                <h2 className='Form-Heading'>Add Students</h2>
                <form className='Form-Student' onSubmit={handleSubmit}>
                    <input
                        className='Form-Name'
                        type='text'
                        placeholder='Enter Name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <input
                        className='Form-Grade'
                        type='text'
                        placeholder='Enter Student Grade'
                        value={grade}
                        onChange={(e)=>setGrade(e.target.value)}
                    />
                    <input
                    className='Form-Number'
                    placeholder='Enter Phone Number'
                    type='number'
                    value={phoneno}
                    onChange={(e)=>setphoneno(Number(e.target.value))}
                    />
                    <select
                        className='Form-Gender'
                        value={gender}
                        onChange={(e)=>setGender(e.target.value as Gender)}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <input 
                        type="file" 
                        placeholder='Enter Image'
                        accept="image/*" 
                        onChange={handlePhotoChange} 
                        className="Form-Input"
                    />
                    <button type='submit' className='Button_Submit'>Submit</button>

                </form>

            </div>
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