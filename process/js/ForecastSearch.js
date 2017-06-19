var React = require('react');

var ForecastSearch = React.createClass({
	render() {
		return (
			<div className="row mb-3">
				<div className="col-md-6 offset-md-6" placeholder="Search" type="text">
					<div className="input-group input-group-lg ">
						<input placeholder="Search" type="text" className="form-control"/> 
						<span className="input-group-btn">
							<button className="btn btn-primary">Add</button>
						</span>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = ForecastSearch;