/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var i = 0; var path = new Array();

// LIST OF IMAGES
path[0] = "images/Woodward-Hall-UNCC.jpg";
path[1] = "images/2015-AMIA-Joint-Summits.jpg";
path[2] = "images/Yao-Novel-health-ROI.jpg";
path[3] = "images/Summer-Retreat-Reedy-Creek-Park.jpg";

function swapImage()
{
document.slide.src = path[i];
if(i < path.length - 1) i++;
else i = 0;
setTimeout("swapImage()",4500);
}
window.onload=swapImage;
