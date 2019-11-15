console.log('Wellington Brewries');
// Brewries locations
var myKey = JSON.parse(apiKey);//convert json data into js object


var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + myKey[0].key + '&callback=initMap';
document.getElementsByTagName('body')[0].appendChild(script);//appending to the body of index html

$(document).ready(function(){
	  $('#area').change(function(){
			console.log($('#area').val());
	    // var area=document.getElementById('area').value;
	    // console.log(area);
			// map.panTo({lat : -41.131073,lng : 175.067505});

			for (var i = 0; i < brewries.length; i++) {
				if ($('#area').val() = brewries[i].area){ break; } {
					map.panTo(brewries[i].longAndLat);
				}
			}
	  });
	});




//loop through array and find first instance of matching selection
//break the loop as soon as it finds it



var brewries = [
	{
		id : 101,
		name : 'Panhead',
		area : 'Upper-Hutt',
		longAndLat : {lat : -41.131073,lng : 175.067505},
		openDays : ['Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm']
	},
	{
		id : 102,
		name : 'Boneface',
		area : 'Upper-Hutt',
		longAndLat : {lat : -41.130121,lng : 175.068525},
		openDays : ['Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm']
	},
	{
		id : 103,
		name : 'Kereru',
		area : 'Upper-Hutt',
		longAndLat : {lat : -41.129686,lng : 175.072361},
		openDays : ['Tue' , 'Wed', 'Thu', 'Fri', 'Sat'],
		openHours : ['9am - 4pm', '9am - 4pm', '9am - 4pm', '10am - 5pm', '10am - 5pm']
	},
	{
		id : 104,
		name : 'Heyday Beer Co',
		area : 'Wellington-City',
		longAndLat : {lat : -41.295940,lng : 174.773553},
		openDays : ['Mon', 'Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 11pm', '3pm - 11pm', '11am - 10pm', '11am - 10pm', '11am - 12am', '11am - 12am', '11am -9pm']
	},
	{
		id : 105,
		name : 'Garage Project Cellar Door',
		area : 'Wellington-City',
		longAndLat : {lat : -41.294491,lng : 174.767862},
		openDays : ['Mon', 'Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['12pm - 7pm', '12pm - 8.30pm', '12pm - 8.30pm', '12pm - 8.30pm', '10am - 9.30pm', '10am - 9.30pm', '12pm - 7pm']
	},
	{
		id : 106,
		name : 'Parrotdog Brewery',
		area : 'Eastern-Suburbs',
		longAndLat : {lat : -41.326756,lng : 174.799773},
		openDays : ['Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 7pm', '1pm - 7pm', '11am - 8pm', '11am - 8pm', '12pm - 6pm']
	},
	{
		id : 107,
		name : 'Baylands Brewery',
		area : 'Lower-Hutt',
		longAndLat : {lat : -41.225268,lng : 174.873098},
		openDays : ['Tue' , 'Wed', 'Thu', 'Fri', 'Sat'],
		openHours : ['9am - 5.30pm', '9am - 5.30pm', '9am - 5.30pm', '9am - 5.30pm', '11am - 5.30pm']
	},
	{
		id : 108,
		name : 'Double Vision Brewing',
		area : 'Eastern-Suburbs',
		longAndLat : {lat : -41.309406,lng : 174.821354},
		openDays : ['Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 10.30pm', '3pm - 11.30pm', '12pm - 11.30pm', '12pm - 9.00pm']
	},
	{
		id : 109,
		name : 'Whistling Sisters Beer Co',
		area : 'Wellington-City',
		longAndLat : {lat : -41.294065,lng : 174.777728},
		openDays : ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 12am', '3pm - 12.00am', '3pm - 12am', '11:30am – 1am', '10am - 1am', '10am - 12am']
	},
	{
		id : 110,
		name : 'Fork and Brewer',
		area : 'Wellington-City',
		longAndLat : {lat : -41.289235,lng : 174.775628},
		openDays : ['Mon', 'Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['11.30am - 11pm', '11.30am - 12am', '11.30am - 12am', '11.30am - 12am', '11.30am - 10pm', '11.30am - 12am', '11.30am - 10pm']
	}
];

// for (var i = 0; i < brewries.length; i++) {
// 	// var name = brewries[i].name;
// 	// var test = {
// 	// 	lat: brewries[i].lat,
// 	// 	lng: brewries[i].long};
// 	//
// 	// console.log(name);
// 	// console.log(test);
// }

var map;
function initMap(){
	var center;
	 //center coordinates
		center = {lat: -41.2911449, lng: 174.7814447};
	 //map object
	 	map = new google.maps.Map(
			 document.getElementById('mapContain'), {
			 zoom:12,
			 center: center,
		 });
	 for(i=0; i<brewries.length;i++){
		 // Adds all of the markers from the brewery array
		 addMarkers(brewries[i]);
	 }
	 function addMarkers(props){
 		// Creates the marker variable
 		var marker = new google.maps.Marker({
 			// Positions the marker to where the brewery is located
 			position: props.longAndLat,
 			// adds the marker to the specific map
 			map: map,
 			// Gives the map a title
 			title: props.name,
 			// Adds the card to be displayed when an icon is clicked
 			content: props.openCard
 		});
		if(props.name){
			var infoWindow = new google.maps.InfoWindow({
				// Takes card of icon that has been clicked
				content: props.name,
			});
			// On click, diplays the selected card
			marker.addListener('click', function(){
				// Works out which map and marker was clicked
				infoWindow.open(map, marker)
			});
		}
	}
};



// var wellyCity = document.getElementById('wellCityClick').value;
// var eastSub = document.getElementById('eastSubClick').value;
// var lowHutt = document.getElementById('lowHuttClick').value;
// var upHutt = document.getElementById('upHuttClick').value;
