import React, { useState } from "react";
import Student from './Student';
import StudentProps from './StudentProps';

let studentsList = [
	new StudentProps("John", "DOE", "DFS", 3),
	new StudentProps("Jane", "DOE", "DFS", 4),
	new StudentProps("June", "DOE", "DFS"),
];

function StudentList() {
    const [students, setStudents] = useState(studentsList);
    const [filteredStudents, setFilteredStudents] = useState(studentsList);

    const handleFilterNoteChange = (value) => {
        const filteredStudents = students.filter(student => student.note === parseInt(value));
        setFilteredStudents(filteredStudents);
        console.log(filteredStudents);
    }

	return <>
        <div>
            <label>Filtre note</label>
            <input type="number" min="0" max="5" onChange={ (e) => handleFilterNoteChange(e.target.value) }/>
        </div>


        { filteredStudents.map((student,index) => <Student key={ index } studentProps={ student } />)}
    </>
}

export default StudentList;
