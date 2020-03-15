let showMenu = () => {
	document.getElementById('menu-icon').classList.add('menu-hide');
	document.getElementById('close-icon').classList.remove('menu-hide');
	document.getElementById('navbar').classList.remove('menu-hide');
	 }

let hideMenu = () => {
	document.getElementById('menu-icon').classList.remove('menu-hide');
	document.getElementById('close-icon').classList.add('menu-hide');
	document.getElementById('navbar').classList.add('menu-hide');
}

let htmlDisplay = {
	convertXML: (code) => code
		.replace(/</g,'&lt;')
		.replace(/>/g,'&gt;')
		.replace(/\n/g,'<br />\n')
	,
	getInput: () => document.querySelector('#html_display textarea').value
	,
	populateOutput: (text) => document.querySelector('#html_display code').innerText = text
}

document.addEventListener("DOMContentLoaded", (event) => {

	document.querySelector('#html_display button[type="submit"]')
		.addEventListener('click', () => 
		htmlDisplay.populateOutput(htmlDisplay.convertXML(htmlDisplay.getInput())));

	document.getElementById('menu-icon').addEventListener('click', showMenu);
	
	document.getElementById('close-icon').addEventListener('click', hideMenu);
	
	document.querySelectorAll('nav a').forEach((elem) => {
		elem.addEventListener('click', hideMenu);
	});
});