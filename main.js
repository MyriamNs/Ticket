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

 // Function to match the form to URL/stored params
const updateForm = (params) => {
	params = new URLSearchParams(params); // Parse into params
};

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




