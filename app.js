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
	
	document.querySelectorAll('#navbar a').forEach((elem) => {
		elem.addEventListener('click', () => 
		document.querySelector('#navbar input[type="checkbox"]').checked = false
		);
	});
});