
/* Multi Purpose Script for SQH Site functionality and styling */

/*
function subHeight() {
	if(document.getElementsByClassName("submenucontainer")) {
		var thing= document.getElementsByClassName("submenucontainer");
		thing[0].style.height="600px";
		console.log("Found");
	} else	{
		console.log("Not Found");
	}
}

window.onload= subHeight();

*/

/*
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
*/

//document.onload = setTimeout(function () {primaryAnchors("PaintP")}, 3000);

// Method for determining User city and recommending Store
/*function calculateDistance(origin, destination) {
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

*/

// Find Festool page and insert register tool image
	const currentURL = window.location.href;

	if (currentURL.includes("festool")) {
	// Select the target div with the class 'row-breadcrumb'
        const targetElement = document.querySelector('.productaddtocart_container');

	    // Check if the target element exists
	    if (targetElement) {
		// Create a new div element
		const newDiv = document.createElement('div');

		// Set the content of the new div (innerHTML)
		newDiv.innerHTML = "<a href='https://login.festool.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fscope%3Dcode%2520email%2520offline_access%2520openid%2520phone%2520profile%2520roles%2520terms%2520tts.cashback%2520tts.contact_request%2520tts.customer%2520tts.dealer%2520tts.lottery%2520tts.pdf_generator%2520tts.personal_data%2520tts.registered_machines%2520tts.repairorder%2520tts.sellout%2520tts.shipping_address%2520tts.shopping_list%2520tts.tan_generator%2520tts.warranty_request%2520tts.warrantyenabled_product%26state%3D%252Fmyfestool%26ui_locales%3Den-US%26client_id%3DcustomerPortal.us.tts.live%26response_type%3Dcode%2520id_token%26response_mode%3Dform_post%26nonce%3Df0a3afeb847f41aaa33c78e5549cba97%26redirect_uri%3Dhttps%253A%252F%252Fwww.festoolusa.com%252Fapi%252Fsitecore%252Fttsauthentication%252Flogin' target='_blank'><image style='display: block;margin: 10% auto'  src='https://matt-cloudengineering.github.io/sqh/register_sidebar.png' /></a>";

		// Insert the new div after the 'row-breadcrumb' div
		targetElement.insertAdjacentElement('afterend', newDiv);
	    } else {
		const secondTargetElement = document.querySelector('.row-breadcrumb');	

		// Create a new div element
                const newDiv = document.createElement('div');
		newDiv.classList.add("col-md-12");

                // Set the content of the new div (innerHTML)
                newDiv.innerHTML = "<a href='https://login.festool.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fscope%3Dcode%2520email%2520offline_access%2520openid%2520phone%2520profile%2520roles%2520terms%2520tts.cashback%2520tts.contact_request%2520tts.customer%2520tts.dealer%2520tts.lottery%2520tts.pdf_generator%2520tts.personal_data%2520tts.registered_machines%2520tts.repairorder%2520tts.sellout%2520tts.shipping_address%2520tts.shopping_list%2520tts.tan_generator%2520tts.warranty_request%2520tts.warrantyenabled_product%26state%3D%252Fmyfestool%26ui_locales%3Den-US%26client_id%3DcustomerPortal.us.tts.live%26response_type%3Dcode%2520id_token%26response_mode%3Dform_post%26nonce%3Df0a3afeb847f41aaa33c78e5549cba97%26redirect_uri%3Dhttps%253A%252F%252Fwww.festoolusa.com%252Fapi%252Fsitecore%252Fttsauthentication%252Flogin' target='_blank'><image style='display: block;margin: 10px auto'  src='https://matt-cloudengineering.github.io/sqh/register_your_tool_festool.png' /></a>";

                // Insert the new div after the 'row-breadcrumb' div
                secondTargetElement.insertAdjacentElement('afterend', newDiv);
	    }
	}

