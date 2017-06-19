var React = require('react');

var ForecastList = React.createClass({
	handleDelete() {
		this.props.onDelete(this.props.whichItem);
	},

	render() {
		var condition = this.props.singleItem.weather[0].main;

		var degCInt = Math.ceil(this.props.singleItem.main.temp);
		
		var urlImage = getUrlImage();

		function getUrlImage() {
			var result;
			switch (condition) {
				case 'Haze':
					result = "col-12 urlHaze p-0"
					break;
				case 'Clouds':
					result = "col-12 urlClouds p-0"
					break;
				case 'Clear':
					result = "col-12 urlClear p-0"
					break;
				case 'Rain':
					result = "col-12 urlRain p-0"
					break;
			} 
			return result;
		};

		return (

				<div className="row">
					<div className={urlImage}>
						<div className="overlay">
							<div className="container-fluid">
								<div className="float-right">
									<button className="btn btn-xs btn-danger" onClick={this.handleDelete}>
										<i className="fa fa-times fa-lg" aria-hidden="true"></i>
									</button>
								</div>
								<h2 className="text-left">{this.props.singleItem.name}</h2>
								<h3 className="text-center">{degCInt}&#176;C</h3>
								<p className="text-center">{this.props.singleItem.weather[0].main}</p>
							</div>
						</div>
					</div>
				</div>

			)
	}
})

module.exports = ForecastList;