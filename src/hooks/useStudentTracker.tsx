import { useEffect, useState } from 'react';
import ramphoto from '../assets/ram.jpeg'
import sitaphoto from '../assets/sita.jpeg'

export type Gender= "Male" | "Female" | "Other";
export interface marks{
    Math: string;
    Science: string;
    English: string;
    Nepali: string;
}
export interface StudentList{
    id:string;
    name:string;
    grade:string;
    phoneno:number;
    gender:Gender;
    photo: string;
    Marks: marks;
}
export const InitialStudentList: StudentList[]=[
    {
        id:"A101",
        name:"Ram Bhandari",
        grade:"A-",
        phoneno:9860111189,
        gender:"Male",
        photo: ramphoto,
        Marks:{
            Math: "A+",
            Science: "A",
            English: "A-",
            Nepali: "A-"
        }
    },
    {
        id:"A102",
        name:"Sita",
        grade:"B+",
        phoneno:9860111494,
        gender:"Female",
        photo:sitaphoto,
        Marks:{
            Math: "A-",
            Science: "B-",
            English: "B",
            Nepali: "B-"
        }
    }
]

const useStudentTracker = () => {
    const[StudentList,setStudentList]=useState<StudentList[]>(InitialStudentList);
    const [isLoaded, setIsLoaded] = useState(false);
        useEffect(() => {
            const items = localStorage.getItem("StudentList");
            if (items) {
                try {
                const itemParsed: StudentList[] = JSON.parse(items);
                setStudentList(itemParsed);
                } catch (e) {
                console.error("Error loading storage:", e);
                }
            }
            setIsLoaded(true); 
        }, []);
    
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("StudentList", JSON.stringify(StudentList));
        }
        }, [StudentList, isLoaded]);

    const handdleDelete = (id:string) =>{
        const newArray = StudentList.filter(item => item.id !== id);
        setStudentList(newArray);
         }
 
    return{
            StudentList, setStudentList, handdleDelete
    };
}

export default useStudentTracker;