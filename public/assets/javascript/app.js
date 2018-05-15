let trackId;
// axios call to current route to get location
//Fetch call?
const locations = [];
const url = '/api/posts/';

fetch(url, { method: 'get' })
	.then(resp => resp.json())
	.then(function(data) {
		let artists = data.results;
		console.log(artists);
	})
	.catch(err => console.log(err));

// Call to navigator API for user location
function displayLocation(position) {
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;

	let currentLocation = [lat, lng];

	let googleLoc = new google.maps.LatLng(
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

function trackMe() {
	trackId = navigator.geolocation.getCurrentPosition(
		displayLocation,
		displayError
	);
}

function clearTracking() {
	if (trackId) {
		navigator.geolocation.clearWatch(trackId);
		trackId = null;
	}
}

function computeTotalDistance() {
	let totalDistance = 0;

	if (locations.length > 1) {
		for (let i = 1; i < locations.length; i++) {
			totalDistance += google.maps.geometry.shperical.computeDistanceBetween(
				locations[i - 1],
				locations[i]
			);
		}
	}
	return totalDistance;
}

runFineUser = () => {
	const findUser = document.querySelector('#findMe');
	findUser.onclick = element => {
		element.preventDefault();
		if (findUser.innerHTML === 'Start') {
			findUser.innerHTML = 'Stop';
			trackMe();
		} else {
			findUser.innerHTML = 'Start';
			clearTracking();
			let dist = computeTotalDistance();
			if (dist > 0) {
				dist = Math.round(d * 1000) / 1000;
				const miles = dist / 1.6;
			}
		}
	};
};
