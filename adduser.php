<html>

	<?php 
		session_start();
		if($_SESSION['username']===null) {
			echo header('location:/index.php');

		}
	?> 

<head> 
	<link rel="stylesheet" type="text/css" href="add_user.css">
	<script src="adduser.js" type="text/javascript"></script>

</head>
<body> 
	<p> <h1> New User </h1> </p>
	<section id="a">
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
</section>
</body>
</html>