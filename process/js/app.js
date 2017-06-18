var React = require('react');
var ReactDOM = require('react-dom');



var Forecast = React.createClass({

	getInitialState() {
		return {
			data: [this.props.data],
			title: "Today's Forecast",
			active: true
			
		} //return
	}, //getInitialStatus
	render() {

		var displayList = {
			display: this.state.active ? 'block' : 'none'
		};
		var degCInt = Math.floor(this.state.data[0].main.temp - 273.15),
			 //a record of condition: clouds // 
			condition = this.state.data[0].weather[0].main.toLowerCase();


		this.state.active ? null : this.state.title = "No Forecast";
		return (
				<div className="container">
					<div className="row">
						<div className="col" style={displayList}>
							<h1>{ this.state.title }</h1>
							<p>It is {degCInt} &#176;C in Melbourne </p>
							<p>It is relatively {condition} up in the twinkling sky!</p>
						</div>
					</div>
				</div>
		)
	}
})






function getWeather(callback) {
	var url = 'http://api.openweathermap.org/data/2.5/weather?zip=3000,au';
	var apiKey= "005fa98ae858a29acf836ecdefac0411";
	var httpRequest;
	makeRequest();


	function makeRequest() {
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = responseMethod;
		httpRequest.open('GET', url + '&appid=' + apiKey);
		httpRequest.send();
	}

	function responseMethod() {
		if(httpRequest.readyState === 4) {
			if(httpRequest.status === 200) {
				try {
					var data = JSON.parse(httpRequest.responseText);

					callback(null, data);
				} catch (e) {
					callback(e);
				}

			} else {
				callback({
					success: false,
					status: httpRequest.status
				});
			}
		}
	}
};



var handleResult = function(err, result) {
	if (err) {
		console.log("Error!", JSON.stringify(err));
	}
	console.log(result);
	var weatherBox = document.getElementById('weatherBox');
	ReactDOM.render(<Forecast data={result}/>, weatherBox);
	
};


getWeather(handleResult);

