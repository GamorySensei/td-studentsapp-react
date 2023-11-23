import React from "react";
import StudentProps from "./StudentProps";

function NewStudentForm({ onSubmit }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const { firstname, lastname, promo } = form;
		let student = new StudentProps(
			firstname.value,
			lastname.value,
			promo.value
		);
		onSubmit(student);
		form.reset();
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div className="form-group mb-3">
				<label>Nom</label>
				<input type="text" name="lastname" className="form-control" />
			</div>

			<div className="form-group mb-3">
                <label>Prénom</label>
                <input type="text" name="firstname" className="form-control" />
            </div>

			<div className="form-group mb-3">
                <label>Promo</label>
                <input type="text" name="promo" className="form-control"/>
            </div>

			<button className="btn btn-primary">Ajouter</button>
		</form>
	);
}

export default NewStudentForm;
