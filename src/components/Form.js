import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";

import TextInput from "./TextInput";

// redux form has prop named handleSubmit, which handles e.preventDefault and simply pass form values to the callback function.
const Form = ({ handleSubmit }) => {
	const dispatch = useDispatch();

	// hanleSubmit pass in form values to this callback
	const onSubmit = (formValues) => {
		console.log(formValues);
		clearForm();
	};

	// dispatch a reset(formName) imported from redux-form
	const clearForm = () => {
		dispatch(reset("test-form"));
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field name="title" component={TextInput} label="Title: " />
				<Field name="description" component={TextInput} label="Description: " />
				<button>Submit</button>
				<button onClick={clearForm}>Clear</button>
			</form>
		</div>
	);
};

// validation logic is passed in with form values
const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		errors.title = "You must enter a title.";
	}
	if (!formValues.description) {
		errors.description = "You must enter a description";
	}
	return errors;
};

// wrap the component as reduxForm with form name and validation logic
export default reduxForm({ form: "test-form", validate: validate })(Form);
