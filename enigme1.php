<?php 
session_start() ; 
$_SESSION['id'] = 'test' ; 


?>
<!DOCTYPE html>
<html>
<head>
	<title>Enigma</title>
	<style type="text/css">
		.first {
			color : #EFEFEF ;

		}
	</style>
</head>
<body style="background-color : #1F1F1F ; ">
	<center>
		<h1 class="first" style="color : orange; margin-top : 80px">Great job, you found the first engima!</h1>		  
		<h2 class="first">Now try to solve it :)</h2>	
				 
		<h3 class="first">
			Find the output of the following code
		</h3>	

		<img src="code.png">
		<br>
		<br>

		<form action="#" method="POST" name="form">
			<input class="form-control" name="code">
			<input type="submit" name="submit" value="submit">
		</form>
	

	<?php
	if (isset($_POST['code'])) { 
		if ($_POST['code'] == 29) {
		?>
		<h2 style="color : #4DDC48">Congratulations, here is the first part of the final URL : xxxxx</h2>


	<?php 
	} else { ?>
		<h2 style="color : #DC4848">Incorrect, keep trying!</h2>
<?php
	}
}
	?>
	</center>	 
	
</body>
</html>