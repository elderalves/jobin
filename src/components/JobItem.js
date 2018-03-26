import React from "react";
import appleImage from "../images/apple-logo.png";

const JobItem = () => (
	<div className="job-item">
		<div className="job-item__logo">
			<img src={appleImage} alt="Apple" className="job-item__logo-image" />
		</div>
		<div className="job-item__content">
			<div className="job-item__title">Ultra Developer</div>
			<div className="job-item__text">
				<p className="job-item__company">Apple</p>
				<p>Palo Alto, CA</p>
			</div>
		</div>
	</div>
)

export default JobItem;