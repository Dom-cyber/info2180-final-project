<?php 
	session_start();
	if($_SESSION['username']===null) {
		echo header('location:index.php');
	}
	?> 
	<html> 
		<head> 
			<link rel="stylesheet" type="text/css" href="css/dashboard.css">
			<script scr="scripts/dashboard.js" type="text/javascript"></script>
		</head>
		<body> 
			<header> 
				<h1> BugMe Issue Tracker </h1>
			</header>

			<section> 
				<h2> Home </h2>
				<h2> Add user </h2>
				<h2> New Issue </h2>
				<h2> Logout </h2>
			</section>

		<main > 
			<h1> New User </h1> 
			 <br> 
			 
			 <form id="addnewuser" method="POST">
			<label> Firstname </label> <br>
			<input type="text" name="firstname" value="" required > <br> 

			<label> Lastname </label> <br>
			<input type="text" name="lastname" value="" required=""> <br>

			<label> Password </label> <br> 
			<input type="text" name="firstname" value="" required=""> <br> 

			<label> Email </label> <br>
			<input type="text" name="email" value="" required=""> <br>

			<input type="submit" value="Submit" onclick="testform()"> 
			
		</form> 



		</main>

	</body>
	</html>
