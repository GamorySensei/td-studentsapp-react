import React, { useEffect, useState } from "react";
import Student from "./Student";
import StudentProps from "./StudentProps";
import NewStudentForm from "./NewStudentForm";

let studentsList = [
	new StudentProps("John", "DOE", "DFS", 3),
	new StudentProps("Jane", "DOE", "DFS", 4),
	new StudentProps("June", "DOE", "DFS"),
];

function StudentList() {
	const [students, setStudents] = useState([]);
	const [filteredStudents, setFilteredStudents] = useState([]);

	useEffect(() => {
		setStudents(studentsList);
		setFilteredStudents(studentsList);
	}, []);

	useEffect(() => {
		setFilteredStudents(students);
	}, [students]);

	const handleFilterNoteChange = (value) => {
		if (value !== "") {
			const filteredStudents = students.filter(
				(student) => student.note === parseInt(value)
			);
			setFilteredStudents(filteredStudents);
		} else {
			setFilteredStudents(students);
		}
	};

	const handleStudentDelete = (index) => {
		let newStudentsList = [...students];
		newStudentsList.splice(index, 1);
		setStudents(newStudentsList);
	};

	const handleNewStudentFormSubmit = (data) => {
		let newStudentsList = [...students];
		newStudentsList.push(data);
		setStudents(newStudentsList);
	};

	return (
		<>
			<div className="row">
				<div className="col-md-8">
					<table className="table table-bordered">
						<thead>
							<tr>
								<td colSpan={5}>
                                    <div class="input-group" style={ {width: '200px' }}>
                                        <span class="input-group-text">Filtre note</span>
                                        <input
                                            type="number"
                                            min="0"
                                            max="5"
                                            className="form-control"
                                            onChange={(e) =>
                                                handleFilterNoteChange(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
								</td>
							</tr>
							<tr>
								<th>NOM</th>
								<th>Prénom</th>
								<th>PROMO</th>
								<th>Note</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{filteredStudents.map((student, index) => (
								<Student
									key={index}
									id={index}
									studentProps={student}
									onDelete={(index) =>
										handleStudentDelete(index)
									}
								/>
							))}
						</tbody>
					</table>
				</div>
				<div className="col-md-4">
					<NewStudentForm
						onSubmit={(data) => handleNewStudentFormSubmit(data)}
					/>
				</div>
			</div>

		</>
	);
}

export default StudentList;
