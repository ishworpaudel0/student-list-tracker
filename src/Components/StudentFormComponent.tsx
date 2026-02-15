import './StudentFormComponent.css'
import type { Gender, StudentList } from '../hooks/useStudentTracker';
import { useState } from 'react';

interface FormProps {
    initialData?: StudentList; 
    onSubmit: (student: Omit<StudentList, 'id'>) => void;
    buttonText: string;
}

const StudentFormComponent = ({ initialData, onSubmit, buttonText }: FormProps) => {
    // 1. Local State initialized with initialData (for Edit) or empty (for Add)
    const [name, setName] = useState(initialData?.name || "");
    const [grade, setGrade] = useState(initialData?.grade || "");
    const [phoneno, setPhoneno] = useState<number | undefined>(initialData?.phoneno);
    const [gender, setGender] = useState<Gender>(initialData?.gender || "Male");
    const [math, setMath] = useState(initialData?.Marks?.Math || "");
    const [science, setScience] = useState(initialData?.Marks?.Science || "");
    const [english, setEnglish] = useState(initialData?.Marks?.English || "");
    const [nepali, setNepali] = useState(initialData?.Marks?.Nepali || "");
    const [photo, setPhoto] = useState<string>(initialData?.photo || "");

    // 2. Local Photo Handler
    const handleLocalPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPhoto(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validation
        if (!name.trim() || !grade.trim() || !phoneno) {
            alert("Name, Grade, and Phone are required!");
            return;
        }

        // 3. Emit data to Parent
        onSubmit({
            name,
            grade,
            phoneno: phoneno!,
            gender,
            photo,
            Marks: { Math: math, Science: science, English: english, Nepali: nepali }
        });

        // 4. Reset form only if we are ADDING
        if (!initialData) {
            setName(""); setGrade(""); setPhoneno(undefined);
            setMath(""); setScience(""); setEnglish(""); setNepali(""); setPhoto("");
        }
    };

    return (
        <div className='Form'>
            <form className='Form-Student' onSubmit={handleSubmit}>
                <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='text' placeholder='Grade' value={grade} onChange={(e) => setGrade(e.target.value)} />
                <input type='number' placeholder='Phone' value={phoneno || ''} onChange={(e) => setPhoneno(Number(e.target.value))} />
                
                <select value={gender} onChange={(e) => setGender(e.target.value as Gender)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <div className="marks-section">
                    <input type='text' placeholder='Math' value={math} onChange={(e) => setMath(e.target.value)} />
                    <input type='text' placeholder='English' value={english} onChange={(e) => setEnglish(e.target.value)} />
                    <input type='text' placeholder='Science' value={science} onChange={(e) => setScience(e.target.value)} />
                    <input type='text' placeholder='Nepali' value={nepali} onChange={(e) => setNepali(e.target.value)} />
                </div>

                <input type="file" accept="image/*" onChange={handleLocalPhotoChange} />
                {photo && <img src={photo} alt="preview" style={{width: '50px', borderRadius: '50%'}} />}

                <button type='submit' className='Button_Submit'>{buttonText}</button>
            </form>
        </div>
    );
}

export default StudentFormComponent;