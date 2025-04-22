// Simple functionality for JS loading HTML partials.
// Usage: 
// Include in HTML head: <script type="text/javascript" src="page.js"></script>
// Add to HTML: <script>page.insertPartial('/path/to/partial.html', document.currentScript);</script>

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const $id = document.getElementById.bind(document);

// Can define API endpoint here for use elsewhere, but may be better to separate this.
//const APIURL = 'http://localhost:3000';

class page {
	static execScripts(elem) {
		elem.querySelectorAll('script').forEach(currentScript => {
			const newScript = document.createElement('script');
			if (currentScript.hasAttribute('src')) newScript.src = currentScript.src;
			if (currentScript.hasAttribute('async')) newScript.async = currentScript.async;
			newScript.innerText = currentScript.innerText;
			currentScript.parentNode.replaceChild(newScript, currentScript);
		});
	}
	static insertHTML(scriptElem, html) {
		scriptElem.insertAdjacentHTML('afterend', html);
		this.execScripts(scriptElem.nextElementSibling);
	}
	static insertPartial(query, scriptElem) {
		fetch(query)
			.then(response => response.text())
			.then(html => {
				this.insertHTML(scriptElem, html);
			})
			.catch(error => console.error('Error loading partial:', error));
	}
}

