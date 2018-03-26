import React from "react";

class SearchBox extends React.Component {
	render() {
		return (
			<div className="toolbar">
				<div className="toolbar__form">
					<input type="text" className="search-job" placeholder="The most delicious jobs for designers"/>
				</div>
				<button className="search-job-button">
					<i className="fa fa-search"></i>
				</button>
			</div>
		)
	}
}

export default SearchBox;