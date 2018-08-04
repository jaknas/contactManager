import React from "react";

export default () => {
	return (
		<div>
			<h1 className="display-4">About Contact Manager</h1>
			<p className="lead">
				A React based app to manage contacts, connected to API and with more
				advanced state management.
			</p>
			<p className="text-secondary">Version 1.0.0</p>
			<p className="text-secondary">
				<a href="https://github.com/kleyu">
					<i
						className="fab fa-github"
						style={{
							fontSize: 48,
							textDecoration: "none",
							color: "black"
						}}
					/>
				</a>
			</p>
		</div>
	);
};
