import {useState} from "react";
import {StudentForm} from "./StudentForm";
import {StudentTable} from "./StudentTable";

export type Student = {
    firstName: string;
    lastName: string;
    email: string;
};

export function App() {
    const [students, setStudents] = useState<Student[]>([]);

    function addStudent(student: Student) {
        setStudents([...students, student]);
    }

    return (
        <div>
            <StudentForm addStudent={addStudent} />
            <StudentTable students={students} />
        </div>
    );
}
