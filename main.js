// You can put your individual, DOM-specific logic here.
window.stateCallback = () => {
	console.log('Something changed!')
}
let city = document.getElementById('some-text-city').value;
function displayInput() {
	document.getElementById('city').innerHTML = city;

}
 function handleSubmit(event){
	console.log('clicked')
	let allInput=document.querySelectorAll('.some-text')
	console.log(allInput)
	allInput.forEach((inputbox,i) => {
		console.log(inputbox.value,i)
		let text=document.createElement('p')
		text.innerHTML=inputbox.value
		if(i==0){text.classList.add('city')}
		if(i==1){text.classList.add('date')}
		if(i==2){text.classList.add('start')}
		if(i==3){text.classList.add('end')}
		document.querySelector('#inputsubmission').append(text)
	});
	
 }


// const buttons = document.querySelectorAll('#buttonfilter button');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
function filter1(){
	const ticketFilter = document.getElementById('printable');
	ticketFilter.style.filter = 'none';

	}
function filter2(){
	const ticketFilter = document.getElementById('printable');
	ticketFilter.style.filter = 'sepia(100%)';

	}
	function filter3(){
		const ticketFilter = document.getElementById('printable');
		ticketFilter.style.filter = 'hue-rotate(90deg)';
	
		}
		function filter4(){
			const ticketFilter = document.getElementById('printable');
			ticketFilter.style.filter = 'hue-rotate(180deg)';
		
			}
			function filter5(){
				const ticketFilter = document.getElementById('printable');
				ticketFilter.style.filter = 'hue-rotate(260deg)';
			
				}
				function filter6(){
					const ticketFilter = document.getElementById('printable');
					ticketFilter.style.filter = 'hue-rotate(310deg)';
				
					}



function reveal() {
	const firstImage = document.querySelector('#landingimage');
	const formReveal = document.querySelector('#ticketform');
  
	firstImage.addEventListener('click', () => {
	  console.log('Image clicked!');
	  formReveal.style.display = 'flex';
	});
  }
  
  reveal();


// Find your form
const formElement = document.querySelector('form')



// Function to match the form to URL/stored params
const updateForm = (params) => {
	params = new URLSearchParams(params) // Parse into params

	params.forEach((value, key) => {
		// Find them by their ID
		let inputOrSelect = document.getElementById(key)

		if (inputOrSelect) {
			// Set the actual input to the param value
			inputOrSelect.value = value
		} else {
			// Radios are a bit different, find them by `name` attribute
			document.querySelectorAll(`[name=${key}]`).forEach((element) => {
				// Check the one matching the param value
				if (value == element.value) element.checked = true
			}
		)
		}
	})

	// And a callback!
	window.stateCallback?.()
}

// Function to save them to localStorage
const storeParams = () => {
	let formParams = new FormData(formElement) // Get the form data

	// Loop through each key/value pair
	formParams.forEach((value, key) => {
		localStorage.setItem(key, value) // And save them out
	})
}

// Function to update the URL from the form
const updateUrlParams = () => {
	let formParams = new FormData(formElement) // Get the form data
	formParams = new URLSearchParams(formParams) // Make it into params
	formParams = formParams.toString() // And then into a string

	// You could also write this as:
	// let formParams = new URLSearchParams(new FormData(formElement)).toString()

	// Update the URL with the params at the end
	window.history.replaceState(null, null, '?' + formParams)

	// And also store them!
	storeParams()

	// And a callback!
	window.stateCallback?.()
}



// First, check for query/params in the URL
if (window.location.search) {
	let urlParams = window.location.search // Get the query string

	updateForm(urlParams) // Update the form from these
}
// Otherwise check for saved params in storage
else if (localStorage.length > 0) {
	let storedParams = Object.entries(localStorage) // Get the saved params

	updateForm(storedParams) // Update the form from these
}



