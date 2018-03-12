import React from "react";

import JobItemComponent from "./JobItemComponent";

class JobsListComponent extends React.Component {
	render() {
		return (
			<div className="job-list">
				<JobItemComponent />
				<JobItemComponent />
				<JobItemComponent />
				<JobItemComponent />
			</div>
		)
	}
}

export default JobsListComponent;