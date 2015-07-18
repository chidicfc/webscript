var pageLoaded, fetch;

fetch = function () {

	// declare the variables that will be used
	var xhr, targetAddCategories, targetAddProducts, success, failure, progress;
	var table, tbody, tr, td, input;
	// find the categories table and products table containers
	targetAddCategories = document.getElementById("add_categories");
	targetAddProducts = document.getElementById("add_products");
	
	// create a request object
	xhr = getXhr();
	
	if(xhr){
		console.log("xhr is present");	
	} else {
		console.log("xhr is not present");	
	}
	
	table = document.createElement("table");
 	tbody = document.createElement('tbody');
 	tr = document.createElement('tr');
 	td = document.createElement('td');
	input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('placeholder', 'Enter a category name');
	inputButton = document.createElement('input');
	inputButton.setAttribute('type', 'button');
	inputButton.setAttribute('value', 'Create');
	td.appendChild(input);
	td.appendChild(inputButton);
 	tr.appendChild(td);
	tbody.appendChild(tr);
	table.appendChild(tbody);
	targetAddCategories.appendChild(table);
	//success = function () {
		//target.innerHTML = xhr.responseText;
	//};

	//failure = function () {
		//target.innerHTML = "<p>Something went wrong.</p>";
	//};

	//progress = function () {
		//target.innerHTML = "<p><img src='working.gif' />";
	//};

	// initialise a request, specifying the HTTP method
	// to be used and the URL to be connected to.
	//xhr.open("GET", "message.php");
	//xhr.addEventListener("load", success);
	//xhr.addEventListener("error", failure);
	//xhr.addEventListener("progress", progress);
	//xhr.addEventListener("loadstart", progress);
	//xhr.send();

};

// when the page has finished loading all the elements should
// be in place, so they can be discovered and have events attached
// to them
//pageLoaded = function () {
	//var fetchButton = document.getElementById("fetch");
	//if (fetchButton) {
		//fetchButton.addEventListener("click", fetch);
	//}
//};

window.addEventListener( "load", fetch );