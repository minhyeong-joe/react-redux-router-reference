import React from "react";

// component to display for Field component (automatically takes in input, meta)
const TextInput = ({ input, meta, label }) => {
	return (
		<div>
			<label htmlFor={input.name}>{label}</label>
			<input {...input} autoComplete="off" />
			{renderError(meta)}
		</div>
	);
};

// render error message based on meta of the form field
const renderError = (meta) => {
	if (meta.touched && meta.error) {
		return <span style={{ color: "red" }}>{meta.error}</span>;
	}
};

export default TextInput;
