function SaveItem() {
			
	var date = document.forms.todolist.date.value;
	var time = document.forms.todolist.time.value;
	var remind =document.forms.todolist.reminder.value;
	var array=[];
	array.push(time);
	array.push(remind);
	
	localStorage.setItem(date,JSON.stringify(array));
	
	
}

function ModifyItem() {
	var name = document.forms.ShoppingList.name.value;
	document.forms.ListOfDebt.data.value.commend = localStorage.getItem(name,commend);
	doShowAll();
}

function RemoveItem() {
	var name = document.forms.ListOfDebt.name.value;
	document.forms.ListOfDebt.data.value.commend = localStorage.removeItem(name,commend);
	doShowAll();
}

function ClearAll() {
	localStorage.clear();
	doShowAll();
}

// dynamically draw the table

function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "";
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
		}
		if (list == "<tr><th>Name</th><th>Value</th><th>commend</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot store ListOfDebt as your browser do not support local storage');
	}
}


/*
 * Checking the browser compatibility.
 * 
 * Alternately can use Modernizr scripts- JavaScript library that helps us to
 * detect the browser support for HTML5 and CSS features Example - <script
 * type="text/javascript" src="modernizr.min.js"></script>
 * 
 * if (Modernizr.localstorage) { //use localStorage object to store data } else {
 * alert('Cannot store user preferences as your browser do not support local
 * storage'); }
 */
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}