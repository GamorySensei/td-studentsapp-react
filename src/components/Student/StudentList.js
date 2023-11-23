import React, { useEffect, useState } from "react";
import Student from './Student';
import StudentProps from './StudentProps';

let studentsList = [
	new StudentProps("John", "DOE", "DFS", 3),
	new StudentProps("Jane", "DOE", "DFS", 4),
	new StudentProps("June", "DOE", "DFS"),
];

function StudentList() {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);

    useEffect(() => {
        setStudents(studentsList)
        setFilteredStudents(studentsList)
    }, [])

    useEffect(() => {
        setFilteredStudents(students)
    }, [students])

    const handleFilterNoteChange = (value) => {
        if(value !== "")
        {
            const filteredStudents = students.filter(student => student.note === parseInt(value));
            setFilteredStudents(filteredStudents);
        }
        else
        {
            setFilteredStudents(students);
        }
    }

    const handleStudentDelete = (index) => {
        let newStudentsList = [...students];
        newStudentsList.splice(index,1);
        setStudents(newStudentsList);
    }

	return <>
        <div>
            <label>Filtre note</label>
            <input type="number" min="0" max="5" onChange={ (e) => handleFilterNoteChange(e.target.value) }/>
        </div>


        { filteredStudents.map((student,index) => 
            <Student 
                key={ index } 
                id={ index } 
                studentProps={ student }
                onDelete = { (index) => handleStudentDelete(index) }
            />)
        }
    </>
}

export default StudentList;
