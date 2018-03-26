import React from "react";

import JobItem from "./JobItem";

class JobsList extends React.Component {
	render() {
		return (
			<div className="job-list">
				<JobItem />
				<JobItem />
				<JobItem />
				<JobItem />
			</div>
		)
	}
}

export default JobsList;