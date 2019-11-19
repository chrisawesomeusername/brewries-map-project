console.log('Wellington Brewries');
// Brewries locations
var myKey = JSON.parse(apiKey);//convert json data into js object
var map;//declaring map variable at the start of js to show it is a global variable

//creating a script element dynamically to use the API key securely from the seperate JSON file
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + myKey[0].key + '&callback=initMap';
document.getElementsByTagName('body')[0].appendChild(script);//appending to the body of index html

// date picker





$('#startDate').datepicker({
 dateFormat: 'yy-mm-dd',
 changeMonth: true,
 minDate: new Date(),
 maxDate: '+1y',
 onSelect: function(date){
   var selectDate = new Date(date);
   var msecsInADay = 86400000; // number of milliseconds in a day
   var stDate = new Date(selectDate.getTime() + msecsInADay); //considering the time of the day when the site is used
   //set minimm date of endDatePicker after selecteddate of startDate
   $('#endDate').datepicker('option', 'minDate', stDate);
   var enDate = new Date(selectDate.getTime() + 15 * msecsInADay);
   $('#endDate').datepicker('option', 'maxdate', enDate);
 }
});
$('#endDate').datepicker({
 dateFormat: 'yy-mm-dd',
 changeMonth: true
});
function dateDiff(){
 // console.log(calc);
 var start = $(startDate).datepicker('getDate');
 var end = $(endDate).datepicker('getDate');
 // convert milliseconds to seconds then to seconds, then to minutes, then to hours
 var days = (end - start)/1000/60/60/24; //user readable format
 document.getElementById('dateResult').value = days;
 return;
}
$('#calcDate').click(function(){
 console.log('date');
 dateDiff();
});


// $('#startDate').datepicker



$(document).ready(function(){
	  $('#area').change(function(){
		console.log($('#area').val());

			for (var i = 0; i < brewries.length; i++) {
				if ($('#area').val() === brewries[i].area) {
					map.setZoom(14)
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


function initMap(){
//the initMap function is kind of link generating a a window where all the map content is contained
	var center;
	var oldwindow;
	 //center coordinates
		center = {lat: -41.2911449, lng: 174.7814447};
	 //map object
	 	map = new google.maps.Map(
			document.getElementById('mapContain'), {
			zoom:12,
			center: center,
			// mapTypeId: 'hybrid',
			styles : [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
		 });

		 for(i=0; i<brewries.length;i++){
			// Adds all of the markers from the brewery array
			addMarkers(brewries[i]);
		 }
	 function addMarkers(props){
		 //a variable to get a specific icon from the internet
		 var icons = 'https://maps.google.com/mapfiles/kml/shapes/bars.png'
 			// Creates the marker variable
	 		var marker = new google.maps.Marker({
				animation: google.maps.Animation.DROP,
	 			// Positions the marker to where the brewery is located
	 			position: props.longAndLat,
	 			// adds the marker to the specific map
	 			map: map,
				//icon is an option from the initmap function that calls the icons
				// icon: icons,

	 			// Gives the map a title
	 			// title: props.name,
	 			// Adds the card to be displayed when an icon is clicked
	 			// content: props.openCard
	 		});
			if(props.name){
				var infoWindow = new google.maps.InfoWindow({
				// Takes card of icon that has been clicked
				content: props.name,
				});
				// On click, diplays the selected card
				marker.addListener('click', function(){
					if (oldwindow){
						oldwindow.close();
					};
					// Works out which map and marker was clicked
					infoWindow.open(map, marker)
					oldwindow=infoWindow;
					console.log(oldwindow);
				});
		}
	}
};
