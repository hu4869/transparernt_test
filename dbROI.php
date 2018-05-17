<?php
	$mysqli = new mysqli('localhost', 'transpb9_hiweb', 'h1we6', 'transpb9_ROI');

	//Run a query
	$result=$mysqli->query("SELECT year,total_burden_in_million,publication,trial,ROI FROM ROI where PheWAS_code=".$_GET['code']." and total_burden_in_million>1;")
?>
<div name='detail'>
	<div class='tbname'></div>
	<table>
	 	<tr>
			<th>Year</th>
			<th>Total burden in million</th>
			<th>Publication</th>
			<th>Trial</th>
			<th>ROI</th>
		</tr>
		<?php
	// Loop through all the elements in the result variable
	While ($row=$result->fetch_assoc()){
		echo "<tr>";
		echo "<td>" . $row['year'] . "</td>";
		echo "<td>" ;
				printf("%1.2e",$row['total_burden_in_million']);
		echo "</td>";
		echo "<td>" . $row['publication'] . "</td>";
		echo "<td>" . $row['trial'] . "</td>";
		echo "<td>" ;
			printf("%1.2e", $row['ROI']);
		echo "</td>";
		echo "</tr>";
	}

$result->free();
$mysqli->close();
?>
</table>
</div>
