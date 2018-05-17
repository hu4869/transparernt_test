/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var i = 0; var path = new Array(); 

// LIST OF IMAGES
path[0] = "images/Health-ROI.jpg"; 
path[1] = "images/Health-Informatics-Topics.jpg"; 
path[2] = "images/Drug-Discovery.jpg"; 
path[3] = "images/Ontology.jpg"; 
path[4]=  "images/Genome-Research.jpg";

function swapImage() 
{ 
document.slide.src = path[i]; 
if(i < path.length - 1) i++; 
else i = 0; 
setTimeout("swapImage()",4500); 
} 
window.onload=swapImage; 


