
/* Multi Purpose Script for SQH Site functionality and styling */


function subHeight() {
	if(document.getElementsByClassName("submenucontainer")) {
		var thing= document.getElementsByClassName("submenucontainer");
		thing[0].style.height="600px";
		console.log("Found");
	} else	{
		console.log("Not Found");
	}
}

function primaryAnchors(find) {
	anchors = document.getElementsByTagName("a");
	console.log(anchors.length);
	for (let anchor of anchors) {
	    // console.log(anchor.innerHTML);
	    if (anchor.innerHTML == find) {
		console.log("Anchor Found");
		anchor.setAttribute("href","https://saratogaqualityhardware.com/paint-at-quality-hardware");
	    }
	}
	console.log("Called PA");
}

function hideVideoAP() {
	//console.log(window.location);
	if(window.location.href != "https://saratogaqualityhardware.com/") return;
	video = document.getElementById("vid_container");
	video.style.display="none";
	// Set Cookie to check for masthead visibility
	document.cookie = "masthead_video=played";
	console.log("Video Hidden");
	} // Add scripting to write a session cookie if video played and check for cookie existince on page load to enable or disable video


document.onload = setTimeout(function () {hideVideoAP()}, 27000);
//document.onload = setTimeout(function () {primaryAnchors("PaintP")}, 3000);

window.onload= subHeight();

function calculateDistance(origin, destination) {
  // This is the endpoint URL of the Distance Matrix API service
  const endpoint = 'https://maps.googleapis.com/maps/api/distancematrix/json?';

  // Parameters for the API request
  const params = new URLSearchParams({
    origins: origin,
    destinations: destination,
    key: 'YOUR_API_KEY', // TODO: Replace with your real API key
    // You can customize your request by using additional parameters available in the API documentation
  });

  // Full URL of the request
  const url = endpoint + params.toString();

  // Send a request to the Distance Matrix API service
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (!data.rows.length) {
        console.error('No results found.');
        return;
      }

      const element = data.rows[0].elements[0];
      if (element.status === 'OK') {
        // Extract the distance and duration
        const { distance, duration } = element;
        console.log(`Distance: ${distance.text}, Duration: ${duration.text}`);
      } else {
        console.error('Error:', element.status);
      }
    })
    .catch(error => console.error('Error fetching data from Distance Matrix API:', error));
}

// Example usage
const storeAddress = '1600 Amphitheatre Parkway, Mountain View, CA';
const deliveryAddress = 'Your Delivery Address Here'; // Replace with the actual address

// calculateDistance(storeAddress, deliveryAddress);

// Find Festool page and insert register tool image
	const currentURL = window.location.href;

	if (currentURL.includes("festool")) {
	// Select the target div with the class 'row-breadcrumb'
        const targetElement = document.querySelector('.productaddtocart_container')

	    // Check if the target element exists
	    if (targetElement) {
		// Create a new div element
		const newDiv = document.createElement('div');

		// Set the content of the new div (innerHTML)
		newDiv.innerHTML = "<image src='https://matt-cloudengineering.github.io/sqh/register_sidebar.png' />";

		// Insert the new div after the 'row-breadcrumb' div
		targetElement.insertAdjacentElement('afterend', newDiv);
	    } else {
		console.warn('Target element with class "row-breadcrumb" not found.');
	    }
	}
