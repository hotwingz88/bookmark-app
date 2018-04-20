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
	
       //fetch the bookmarks
	fetchBookMarks();
	
	e.preventDefault();
}	

function fetchBookMarks(){
	
	// Get bookMarks from localStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	
	// Get thr output id
	var bookmarksResult = document.querySelector('#bookmarksResult');
	
	// Build output
	bookmarksResult.innerHTML = '';
	// Loop through bookmarks
	for(var i=0;i<bookmarks.length;i++){
	    var name = bookmarks[i].name;
	    var url = bookmarks[i].url;
		
	    bookmarks.innerHTML += '<div><h3>' + name '' + 
		    		   '<a class="btn btn-success" href="' +url + '">Visit</a>' +
		                   '<a class="btn btn-danger" onclick="deleteBookmark(\'' + url + '\') href="#">Delete</a>'
		                   '</h3></div>'
		
	}
	
}


function deleteBookmark(url){
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
   
    //loop through bookmarks
   for(var i=0;i<bookmarks.length;i++){
       if(bookmarks[i].url == url) {
           //  Remove bookmark from bookmarks array
       }   bookmarks.splice(i, 1);
	   break;
	  
    
   }
		
 //   Rest bookmarks back to localStorage
localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
 
// Re-fetch bookmarksResults
    fetchBookMarks();
}
