import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addContact } from "../../actions/contactActions";

class AddContact extends Component {
	// We define initial component state
	state = {
		name: "",
		email: "",
		phone: "",
		errors: {}
	};
	// logic for the ADD CONTACT button function
	onSubmit = e => {
		e.preventDefault();
		// destructure from state
		const { name, email, phone } = this.state;

		// Check For Errors, if inputs are empty, set errors state. this is completed one by one
		if (name === "") {
			this.setState({ errors: { name: "Name is required" } });
			return;
		}

		if (email === "") {
			this.setState({ errors: { email: "Email is required" } });
			return;
		}

		if (phone === "") {
			this.setState({ errors: { phone: "Phone is required" } });
			return;
		}
		// define new contact, no need to declare id because it is provided by API
		const newContact = {
			name,
			email,
			phone
		};

		//// SUBMIT CONTACT ////

		this.props.addContact(newContact);

		// Clear State
		this.setState({
			name: "",
			email: "",
			phone: "",
			errors: {}
		});

		this.props.history.push("/");
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { name, email, phone, errors } = this.state;

		return (
			<div className="card mb-3">
				<div className="card-header">Add Contact</div>
				<div className="card-body">
					<form onSubmit={this.onSubmit}>
						<TextInputGroup
							label="Name"
							name="name"
							placeholder="Enter Name"
							value={name}
							onChange={this.onChange}
							error={errors.name}
						/>
						<TextInputGroup
							label="Email"
							name="email"
							type="email"
							placeholder="Enter Email"
							value={email}
							onChange={this.onChange}
							error={errors.email}
						/>
						<TextInputGroup
							label="Phone"
							name="phone"
							placeholder="Enter Phone"
							value={phone}
							onChange={this.onChange}
							error={errors.phone}
						/>
						<input
							type="submit"
							value="Add Contact"
							className="btn btn-light btn-block"
						/>
					</form>
				</div>
			</div>
		);
	}
}

AddContact.propTypes = {
	addContact: PropTypes.func.isRequired
};

export default connect(
	null,
	{ addContact }
)(AddContact);
//  null because im not bringing any data from the state
