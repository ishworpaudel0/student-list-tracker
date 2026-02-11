import { useEffect, useState } from 'react';
import { InitialStudentList } from '../pages/StudentForm';
export type Gender= "Male" | "Female" | "Other";
export interface StudentList{
    id:string;
    name:string;
    grade:string;
    phoneno:number;
    gender:Gender;
    photo: string;
}
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
    }
}

export default useStudentTracker;