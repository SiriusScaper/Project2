//Require node-geocoder
const NodeGeocoder = require('node-geocoder');

// Call to navigator API for user location
function currLocation(position) {
	const lat = position.coords.latitude;
	const lng = poistion.coords.longitude;

	let currentLocation = [lat, lng];

	const gogleLoc = new google.maps.LatLng(
		position.coords.latitude,
		position.coords.longitude
	);
	locations.push(googleLoc);

	console.log(currentLocation);
}

// Handle Errors
const displayError = error => {
	const errors = [
		'Unknown error',
		'Permission denied by user',
		'Poistion is not available',
		'Timeout error'
	];
	const message = errors[error.code];
	console.warn(`Error in getting your location: ${message}, ${error.message}`);
};

//

window.onload = () => {
	const findUser = document.querySelector('#findMe');
	findUser.onclick = element => {
		element.preventDefault();
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(currLocation, displayError);
		}
	};
};
