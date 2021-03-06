

function alerttestSM(returnpage, nextpage){//all pages
	if (confirm("Now opening " + nextpage + " in a new window.")){
		document.getElementById(returnpage).setAttribute("href", returnpage);
		document.getElementById(returnpage).setAttribute("target", returnpage);
	}
	else{
		document.getElementById(returnpage).setAttribute("href", "#");
		document.getElementById(returnpage).setAttribute("target", "");
	}
}

function alerttest(returnpage, nextpage){//index.html
	if (confirm("Now taking you to the " + nextpage + " page")){
		document.getElementById(returnpage).setAttribute("href", returnpage);
	}
	else{
		document.getElementById(returnpage).setAttribute("href", "#");
	}
}

function choose1st(first, second){//CreateGames.html
	document.getElementById(first).style.backgroundColor = "darkgray";
	document.getElementById(second).style.backgroundColor = "white";
}

function choose2nd(first, second){//CreateGames.html
	document.getElementById(first).style.backgroundColor = "white";
	document.getElementById(second).style.backgroundColor = "darkgray";
}

function enable(target1, target2){//CreateGames.html and SearchGames.html
	document.getElementById(target1).disabled = false;
	document.getElementById(target2).disabled = false;
	document.getElementById('Yes').style.backgroundColor = "darkgray";
	document.getElementById('No').style.backgroundColor = "white";
}

function disable(target1, target2){//CreateGames.html and SearchGames.html
	document.getElementById(target1).disabled = true;
	document.getElementById(target2).disabled = true;
	document.getElementById('Yes').style.backgroundColor = "white";
	document.getElementById('No').style.backgroundColor = "darkgray";
}

function check(check, uncheck, checklist, unchecklist){//SearchGames.html
	document.getElementById(check).checked = true;
	document.getElementById(uncheck).checked = false;
	for (let i = 0; i < checklist.length; i++){
		document.getElementById(checklist[i]).disabled = false;
	}
	for (let i = 0; i < unchecklist.length; i++){
		document.getElementById(unchecklist[i]).disabled = true;
	}
}

function alertstatus(){//SearchGames.html
	if(document.getElementById('method1').checked == true){
		if(document.getElementById('fname').value.length == 0){
			alert("Please enter necessary information.");
			document.getElementById('ButtonConfirm').setAttribute('href', '#');
			return;
		}
		if(document.getElementById('lname').value.length == 0){
			alert("Please enter necessary information.");
			document.getElementById('ButtonConfirm').setAttribute('href', '#');
			return;
		}
		if(document.getElementById('email').value.length == 0){
			alert("Please enter necessary information.");
			document.getElementById('ButtonConfirm').setAttribute('href', '#');
			return;
		}
		alert("Searching Games based on name: \n" + document.getElementById('fname').value + " " + document.getElementById('lname').value + "\nAnd email: \n" +  document.getElementById('email').value)
		document.getElementById('ButtonConfirm').setAttribute('href', 'CreateGameConfirm.html');

	}
	else if(document.getElementById('method2').checked == true){
		if(document.getElementById('id').value.length == 0){
			alert("Please enter necessary information.");
			document.getElementById('ButtonConfirm').setAttribute('href', '#');
			return;
		}
		alert("Searching Games based on ID: \n" + document.getElementById('id').value);
		document.getElementById('ButtonConfirm').setAttribute('href', 'CreateGameConfirm.html');
	}
}



function SearchGameConfirm(){//SearchGames.html
	document.getElementById("body").innerHTML = '<h1 id="Title">Search Games</h1> <p class="Use">Search Successful! Here are the search results!</p>'
}

function SearchGamePageCheck(){//SearchGames.html
	var errorreport = "";
	var error = false;
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
	var id = document.getElementById("id");
	if(document.getElementById("PrivatePW1").disabled == false){
		if(document.getElementById("PrivatePW1").value.length == 0){
			errorreport += "Please enter a password \n";
			error = true;
		}
	}
	if (document.getElementById("method1").checked){
		if (fname.value.length == 0){
			errorreport += "Please enter a first name \n";
			error = true;
		}
		if (lname.value.length == 0){
			errorreport += "Please enter a last name \n";
			error = true;
		}
	}
	else{
		if (id.value.length == 0){
			errorreport += "Please enter an ID \n";
			error = true;
		}
	}
	if (error){
		alert(errorreport);
	}
	else{
		SearchGameConfirm();
	}
}

function UploadTime(){
	let today = new Date();
	document.getElementById('month').value = today.getMonth() + 1;
	document.getElementById('day').value = today.getDate();
	document.getElementById('year').value = today.getFullYear();
	document.getElementById('timebox1').value = today.getHours() % 12;
	if (JSON.stringify(today.getMinutes()).length == 1){
		document.getElementById('timebox2').value = "0" + today.getMinutes();
	}
	else{
		document.getElementById('timebox2').value = today.getMinutes();
	}
	if (today.getHours() < 12){
		document.getElementById('am').style.backgroundColor = "darkgray";
		document.getElementById('pm').style.backgroundColor = "white";
	}
	else{
		document.getElementById('am').style.backgroundColor = "white";
		document.getElementById('pm').style.backgroundColor = "darkgray";
	}
}

function genID(){
	let id = '';
	let characterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let numChar = characterList.length;
	let idLength = Math.floor(Math.random()*10 + 10);
	for (let i = 0; i < idLength; i++){
		id += characterList.charAt(Math.floor(Math.random()*numChar));
	}
	document.getElementById('id').value = id;
}

function CreateGamesPageCheck(){//CreateGames.html
	//date check
	let errorreport = "";
	var error = false;
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var email = document.getElementById('email').value;
	var month = document.getElementById('month').value;
	var day = document.getElementById('day').value;
	var year = document.getElementById('year').value;
	var hour = document.getElementById('timebox1').value;
	var minute = document.getElementById('timebox2').value;
	var pn = document.getElementById('pn').value;
	var ad = document.getElementById('Ad').value;
	var city = document.getElementById('Cty').value;
	var state = document.getElementById('State').value;
	var zc = document.getElementById('ZipC').value;
	var name = document.getElementById('Area').value;
	var bio = document.getElementById('Bio').value;
	var mp = document.getElementById('MaxPeople').value;
	var pw = document.getElementById('PrivatePW').value;
	var pwc = document.getElementById('PrivateCF').value;
	var id = document.getElementById('id').value;
	//name/email check
	if (fname.length == 0){
		errorreport += "Please enter your first name \n";
		error = true;
	}
	if (lname.length == 0){
		errorreport += "Please enter you last name \n";
		error = true;
	}
	if (email.length == 0){
		errorreport += "Please enter an email \n";
		error = true;
	}
	//month check
	if (month < 1||month > 12){
		errorreport += "Month is Invalid \n";
		error = true;
	}
	//day check
			{
	if (document.getElementById('day').value.length == 0){
		errorreport += "Day is Invalid \n";
		error = true;
	}
	else if (month == 1||month == 3||month == 5||month == 7||month == 8||month == 10||month == 12){
		if(day < 0||day > 31){
			errorreport += "Day is Invalid \n";
			error = true;
		}
	}
	else if (month != 2){
		if(day < 0||day > 30){
			errorreport += "Day is Invalid \n";
			error = true;
		}
	}
	else if (month == 2){
		if(day < 0||day > 28){
			errorreport += "Day is Invalid \n";
			error = true;
		}
	}
			}
	//year check
	if (year < 2020){
		errorreport += "Year is Invalid \n";
		error = true;
	}
	//hour check
	if (hour < 1||hour > 12){
		errorreport += "Hours is Invalid \n";
		error = true;
	}
	//minute check
	if (minute < 0||minute > 59){
		errorreport += "Minutes is Invalid \n";
		error = true;
	}
	else if (minute.length == 0){
		errorreport += "Minutes is Invalid \n";
		error = true;
	}
	//Phone Number check
	if(pn.length == 0){
		errorreport += "Please enter a phone number \n";
		error = true;
	}
	else{
		let numFormat1 = /^[0-9]{3}[0-9]{3}[0-9]{4}$/
		let numFormat2 = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
		let numFormat3 = /^[1][0-9]{3}[0-9]{3}[0-9]{4}$/
		if (!numFormat1.test(pn)&&!numFormat2.test(pn)&&!numFormat3.test(pn)){
			errorreport += "Please enter a valid phone number \n";
			error = true;
		}
	}
	//ID check
	if (id.length == 0){
		errorreport += "Please enter a game ID \n";
		error = true;
	}
	//Address check
	if (ad.length == 0){
		errorreport += "Please enter an address \n";
		error = true;
	}
	//City check
	if (city.length == 0){
		errorreport += "Please enter a city \n";
		error = true;
	}
	//state check
	if (state.length == 0){
		errorreport += "Please enter a state \n";
		error = true;
	}
	//Zip code check
	if (zc.length == 0){
		errorreport += "Please enter a zip code \n";
		error = true;
	}
	if (bio.length > 200){
		errorreport += "Info is too long \n";
		error = true;
	}
	//Password check
	if (document.getElementById('Yes').style.backgroundColor == "darkgray"){
		if (pw.length == 0){
			errorreport += "Please enter a password \n";
			error = true;
		}
		else if (pw.value != pwc.value){
			errorreport += "Passwords do not match \n";
			error = true;
		}
	}
	//Am or Pm check
	if (document.getElementById('am').style.backgroundColor == "darkgray"){
		var ampm = true;
	}
	else{
		var ampm = false;
	}
	//determine action
	if (error == true){
		alert(errorreport);
	}
	else{
		if (CreateGameConfirm() == true){
			newGame(fname, lname, email, month, day, year, hour, minute, ampm, pn, id, ad, city, zc, name, bio, mp, pw);
		}
	}
}

function CreateGameConfirm(){//CreateGames.html
	if (window.localStorage.getItem("numOfGames") != null){
		if (window.localStorage.getItem("numOfGames")==5){
			alert("You have reached the max number of games!");
			return false;
		}
	}
	if (window.localStorage.getItem("numOfGames") == null){
		window.localStorage.setItem("numOfGames", 0);
		let temparray = ["empty", "empty", "empty", "empty", "empty"];
		window.localStorage.setItem('keyarray', JSON.stringify(temparray));
		return true;
	}
	document.getElementById("body").innerHTML = '<h1 id="Title">Create Games</h1> <p class="Use">Game Creation Successful! Check your email inbox for a confirmation email! You could also check the <a href="MyGames.html">MyGames</a> page to see the status of your pick up game!</p>'
	return true;
}

function charCount(id, str, max){
	let num = str.length;
	if (num <= max){
		document.getElementById(id).innerHTML = "Info (" + num + " out of " + max + " characters):";
	}
	else{
		document.getElementById(id).innerHTML = "Info (" + num + " out of " + max + " characters) Info is too long!";
	}
}

//check if element is a number
function checkNum(item){
	if ((item == 0)||(item == 1)||(item == 2)||(item == 3)||(item == 4)||(item == 5)||(item == 6)||(item == 7)||(item == 8)||(item == 9)){
		return true;
	}
	return false;
}
function genID(){
		let id = '';
		let characterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let numChar = characterList.length;
		let idLength = Math.floor(Math.random()*10 + 10);
		for (let i = 0; i < idLength; i++){
			id += characterList.charAt(Math.floor(Math.random()*numChar));
		}
		document.getElementById('id').value = id;
	}

function editgame(){
		let num = document.getElementById('gamenum').value;
		if (num == ""){
			alert("Please enter a number.");
			return;
		}
		if (num > window.localStorage.getItem("numOfGames")){
			document.getElementById('edittool').style.display = "none";
			alert("Game " + num + " doesn't exist.");
			return;
		}
		document.getElementById('edittool').style.display = "inline-block";
	}

function cleargame(){
	let num = document.getElementById('gamenum').value;
	if (num == ""){
		alert("Please enter a number.");
		return;
	}
	if (num > window.localStorage.getItem("numOfGames")){
		document.getElementById('edittool').style.display = "none";
		alert("Game " + num + " doesn't exist.");
		return;
	}
	if (!(confirm("Are you sure?"))){
		return;
	}
	let array = JSON.parse(window.localStorage.getItem('keyarray'));
	window.localStorage.removeItem('keyarray');
	let deletethis = array[num - 1];
	window.localStorage.removeItem(deletethis);
	for(let i = num - 1; i < 4; i++){
		console.log("hello");
		array[i] = array[i + 1];
	}
	array[4] = "empty";
	window.localStorage.setItem('keyarray', JSON.stringify(array));
	window.localStorage.setItem('numOfGames', JSON.stringify(window.localStorage.getItem("numOfGames") - 1));
	mygamesload();
}

function ifempty(id){
		let elt = document.getElementById("id").value;
		if (elt.length == 0){
			return true;
		}
		return false;
	}

function updategame(){
		let num = document.getElementById('gamenum').value;
		let key = (JSON.parse(window.localStorage.getItem('keyarray')))[num - 1];
		let oldGame = JSON.parse(window.localStorage.getItem(key));
		window.localStorage.removeItem(key);
		//gather information
		let nName, nAd, nCity, nID, nMax, nInfo;
		nName = document.getElementById("name").value;
		nAd = document.getElementById("ad").value;
		nInfo = document.getElementById("info").value;
		if (nName != ""){
			oldGame.name = nName;
		}
		if (nAd != ""){
			oldGame.ad = nAd;
		}
		if (nInfo != ""){
			oldGame.info = nInfo;
		}
		window.localStorage.setItem(oldGame.id, JSON.stringify(oldGame));
		mygamesload();
	}

function mygamesload(){
			if (window.localStorage.getItem("numOfGames") == null){
				window.localStorage.setItem("numOfGames", 0);
				let temparray = ["empty", "empty", "empty", "empty", "empty"];
				window.localStorage.setItem('keyarray', JSON.stringify(temparray));
				for (let i = 1; i <= 5; i++){
					document.getElementById(i + 'name').innerHTML = "-";
					document.getElementById(i + 'address').innerHTML = "-";
					document.getElementById(i + 'time').innerHTML = "-";
					document.getElementById(i + 'id').innerHTML = "-";
					document.getElementById(i + 'mp').innerHTML = "-";
					document.getElementById(i + 'info').innerHTML = "-";
					return;
				}
			}
			if (window.localStorage.getItem("numOfGames") == 0){
				for (let i = 1; i <= 5; i++){
					document.getElementById(i + 'name').innerHTML = "-";
					document.getElementById(i + 'address').innerHTML = "-";
					document.getElementById(i + 'time').innerHTML = "-";
					document.getElementById(i + 'id').innerHTML = "-";
					document.getElementById(i + 'mp').innerHTML = "-";
					document.getElementById(i + 'info').innerHTML = "-";
					return;
				}
			}
			let num = JSON.parse(window.localStorage.getItem("numOfGames"));
			let list = JSON.parse(window.localStorage.getItem("keyarray"));
			for (let i = 1; i <= num; i++){
				let currGame = JSON.parse(window.localStorage.getItem(list[i - 1]));;
				document.getElementById(i + 'name').innerHTML = currGame.name;
				document.getElementById(i + 'address').innerHTML = currGame.ad;
				document.getElementById(i + 'time').innerHTML = currGame.time + "  On  " + currGame.date;
				document.getElementById(i + 'id').innerHTML = currGame.id;
				document.getElementById(i + 'mp').innerHTML = currGame.maxp;
				document.getElementById(i + 'info').innerHTML = currGame.info;
			}
			for (let i = num + 1; i <= 5; i++){
				document.getElementById(i + 'name').innerHTML = "-";
				document.getElementById(i + 'address').innerHTML = "-";
				document.getElementById(i + 'time').innerHTML = "-";
				document.getElementById(i + 'id').innerHTML = "-";
				document.getElementById(i + 'mp').innerHTML = "-";
				document.getElementById(i + 'info').innerHTML = "-";
				return;
			}
			document.getElementById("name").value = "";
			document.getElementById("ad").value = "";
			document.getElementById("city").value = "";
			document.getElementById("max").value = "";
			document.getElementById("info").value = "";
		}

function seedetails(){
	let num = document.getElementById("gamenum").value;
	if (num == ""){
		alert("Please enter a number.");
		return;
	}
	if (num > window.localStorage.getItem("numOfGames")){
		document.getElementById('edittool').style.display = "none";
		alert("Game " + num + " doesn't exist.");
		return;
	}
	window.localStorage.setItem("detailnum", num);
	window.open("ViewGame.html");
}

function loaddetails(){
	let num = JSON.parse(window.localStorage.getItem("detailnum"));
	let gamelist = JSON.parse(window.localStorage.getItem('keyarray'));
	let gameid = gamelist[num-1];
	let game = JSON.parse(window.localStorage.getItem(gameid));
	document.getElementById('name').innerHTML = game.name;
	document.getElementById('email').innerHTML = game.email;
	document.getElementById('date').innerHTML = game.date;
	document.getElementById('time').innerHTML = game.time;
	document.getElementById('phone').innerHTML = game.phone;
	document.getElementById('id').innerHTML = game.id;
	document.getElementById('ad').innerHTML = game.ad;
	document.getElementById('area').innerHTML = game.area;
	document.getElementById('info').innerHTML = game.info;
	document.getElementById('max').innerHTML = game.maxp;
	document.getElementById('pw').innerHTML = game.pw;
}

function clearall(){
	if(confirm("Are you sure?")){
		window.localStorage.clear();
	}
	mygamesload();
}

//Object Stuff
function newGame(fname, lname, email, month, day, year, hour, minute, ampm, phone, id, address, city, zip, area, info, max, pw){
	let newCase = new Game(fname, lname, email, month, day, year, hour, minute, ampm, phone, id, address, city, zip, area, info, max, pw);
	window.localStorage.setItem(newCase.id, JSON.stringify(newCase));
	//changing value of numOfGames
	let num = JSON.parse(window.localStorage.getItem('numOfGames'));
	window.localStorage.removeItem('numOfGames');
	window.localStorage.setItem('numOfGames', JSON.stringify(num + 1));
	//changing value of keyarray
	let array = JSON.parse(window.localStorage.getItem('keyarray'));
	window.localStorage.removeItem('keyarray');
	array[num] = newCase.id;
	window.localStorage.setItem('keyarray', JSON.stringify(array));
}

function Game(fname, lname, email, month, day, year, hour, minute, ampm, phone, id, address, city, zip, area, info, max, pw){
	this.name = fname + " " + lname;
	this.email = email;
	this.date = month + "/" + day + "/" + year;
	this.time = hour + ":" + minute;
	if (ampm){
		this.time += " am";
	}
	else{
		this.time += " pm";
	}
	this.phone = phone;
	this.id = id;
	this.ad = address + " " + city + ", " + zip;
	this.area = area;
	this.info = info;
	this.maxp = max;
	this.pw = pw;
}
