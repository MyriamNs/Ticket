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
 function newstyle() {
	
	console.log('Hello')
	stylet=document.querySelector('.city')
	stylet.setAttribute("textDecoration","underline");
	console.log(stylet);
 };
 // Function to match the form to URL/stored params
const updateForm = (params) => {
	params = new URLSearchParams(params); // Parse into params
};


