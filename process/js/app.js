var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var ForecastList = require('./ForecastList');


var ForecastInterface = React.createClass({

	getInitialState() {
		return {
			forecastData: []
		} //return
	}, //getInitialStatus
	componentDidMount: function() {
		var url = 'http://api.openweathermap.org/data/2.5/group?id=1835847,7839805,5946768,1277539&units=metric';

		var apiKey= "005fa98ae858a29acf836ecdefac0411";

		this.serverRequest = $.get(url + '&appid=' + apiKey, function(result) {
			var tempData = result.list;
			this.setState({
				forecastData: tempData
			});
		}.bind(this));
	},
	componentWillUnmount: function() {
		this.serverRequest.abort();
	},
	deleteList(item) {
		var allData = this.state.forecastData;
		var newData = _.without(allData, item);
		this.setState({
			forecastData: newData
		});
	},
	render() {
		var filteredData = this.state.forecastData;
		filteredData = filteredData.map(function(item, index) {
			return (
				<ForecastList key = { index }
					 singleItem = { item }
					 whichItem = { item }
					 onDelete = {this.deleteList}
					  />
				)
		}.bind(this));

		return (
			<div className="container">
				<h1 className="pb-5">Today's Weather</h1>
					{filteredData}
			</div>

			)
	}
})

ReactDOM.render(<ForecastInterface />, document.querySelector('#weatherBox'));


















