function adduser(firstname, lastname, email, password){
	let parameter = "firstname="+firstname+"&lastname="+lastname+"&email="+email+"&password="+password;
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if(xttp.readystate===XMLHttpRequest.DONE && xhttp.status===200) {
				let response=xhttp.response;
				document.open()
				document.write(response);
				document.close();
			}
		}
		xhttp.open('POST', '/users_pages/insert.php',true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		xhttp.send(parameter);
}

function testform() {
	let fname = document.getElementById('fname').value.trim();
	let lname = document.getElementById('lname').value.trim();
	let email = document.getElementById('email').value.trim();
	let pass = document.getElementById('pass').value;

	let msg = "The below errors were detected:\n";
	msg=errors('Firstname',msg,fname);
	msg=errors('Lastname',msg,lname);
	msg=errors('Email',msg,email);
	msg=messagepass(msg,pass);

	if(empty(fname)===false && empty(lname)===false && empty(email)==false && testpassword(pass)===true) {
		adduser(fname,lname,email,pass);
	}
	else {
		alert(msg);

	}

}


function errors(name,status,variable) {
	if(empty(variable)===true){
		status+="The "+name+" field cannot be empty\n";
	}
	return status;
}

function empty(name) {
	if(name=='') {
		return true;
	}
	else {
		return false;
	}
}

function testpassword(pass){
	let passw = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/;
	console.log(passw,pass);
	if(passw.test(pass)===false){
		return false
	}
	else {
		return true;
	}
}
function messagepass(status,pass) {
	let passw = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/;
	console.log(passw,pass);
	if(passw.test(pass)===false){
		status+="The password must contain at least one uppercase letter, one lowercase letter and at least one digit";
		return status; 
	}
}
function logout() {
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange=function() {
		if(xhttp.readyState===XMLHttpRequest.DONE && xttp.status===200){
			let response= xhttp.response;
			document.open();
			document.write(response);
			document.close();

		}
	}
	xhttp.open('POST', '/logout.php',true);
	xhttp.send();
}
function backtomessages() {
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange=function() {
		if(xhttp.readyState===XMLHttpRequest.DONE && xttp.status===200){
			let response= xhttp.response;
			document.open();
			document.write(response);
			document.close();

		}
	}
	xhttp.open('GET', '/dashboard.php',true);
	xhttp.send();
}
