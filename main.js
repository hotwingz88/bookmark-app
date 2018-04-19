// console.log('hello from javascript');

// Listen for form submit
document.querySelector('#myForm')
	    .addEventListener('submit', saveBookMark);


function saveBookMark(e){
	//console.log("save bookmark");

	var siteName = document.querySelector('#siteName').value;
	var siteUrl  = document.querySelector('#siteUrl').value;
	
	var bookmark ={
		name: siteName,
		url: siteUrl
	};

	//console.log(siteName);
	// test local storage
	// localStorage.setItem('test', "Hello world");
	// console.log(localStorage.getItem('test'));
	
	// check if the bookmarks array exists
	if(localStorage.getItem('bookmarks') === null){
		// init array
		var bookmarks = [];

		//add bookmark to array
		bookmarks.push(bookmark);

		//set to localStorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
	} else {
		// get bookmarks from localStorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

		// add new bookmark into bookmarks
		bookmarks.push(bookmark);

		// reset bookmarks back to localStorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
	}


	// prevent form from submitting
	e.preventDefault();
}	