<?php
	//error_reporting(E_ERROR);
	// Connect to MySQL server and select a database
	$mysqli = new mysqli('localhost', 'transpb9_hiweb', 'h1we6', 'transpb9_ROI');
	
	$statement=$mysqli->query("SET SESSION group_concat_max_len = 1000000;");
	$statement2=$mysqli->query("SET SESSION sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));");
	
	// Run a query
	//$result=mysql_query("SELECT PheWAS_code, year,ROI FROM ROI");
	$result = $mysqli->query("SELECT concat('[', group_concat(val),']') as json FROM circles group by '1';");
	// Create a container to save results
	//$emparray=array();
	// Loop through all the elements in the result variable
	//$str = "[";
	while($row=$result->fetch_assoc()){

	echo $row['json'];} 
?>
