var x = document.getElementById("demo1");
var y = document.getElementById("demo2");

var lat;
var long;


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser."
  y.innerHTML = "Geolocation is not supported by this browser.";
  }
}
    
function showPosition(position) {
    // x.innerHTML="Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;
    x.innerHTML = position.coords.latitude;
    lat = x.innerHTML;
    y.innerHTML = position.coords.longitude;
    long = y.innerHTML;
  
    console.log("latitude = "+ lat + " longitude = " + long);
sendMail();
}

// function sendMail() {
//   var link = "mailto:me20b2011@iiitdm.ac.in"
//            + "?cc=myCCaddress@example.com"
//            + "&subject=" + encodeURIComponent("Phone Location Tracker")
//            + "&body=" + encodeURIComponent("Dear,\nYou left your phone at given location \nLatitude: " + lat + "\nLongitude: " + long);
//   ;
  
//   window.location.href = link;
// }

// document.getElementById('myText').value