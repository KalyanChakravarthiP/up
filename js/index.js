function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle("active");
}

function casual(){
//alert("we will see casual shirts");
// document.getElementById('casual').style.visibility='show';
document.getElementById('formal').style.visibility='hidden';
document.getElementById('formal1').style.visibility='hidden';
document.getElementById('formal2').style.visibility='hidden';
document.getElementById('formal3').style.visibility='hidden';
document.getElementById('jeans').style.visibility='hidden';

}
function formal(){
  document.getElementById('casual').style.visibility='hidden';
  document.getElementById('casual1').style.visibility='hidden';
  document.getElementById('casual2').style.visibility='hidden';
  document.getElementById('casual3').style.visibility='hidden';
  // document.getElementById('formal').style.visibility='show';
  document.getElementById('jeans').style.visibility='hidden';
}
function jeans() {
  // document.getElementById('formal').style.visibility='hidden';
  // document.getElementById('formal1').style.visibility='hidden';
  // document.getElementById('formal2').style.visibility='hidden';
  // document.getElementById('formal3').style.visibility='hidden';
  // document.getElementById('casual').style.visibility='hidden';
  // document.getElementById('casual1').style.visibility='hidden';
  // document.getElementById('casual2').style.visibility='hidden';
  // document.getElementById('casual3').style.visibility='hidden';
document.getElementById('mainformal').style.visibility='hidden';
document.getElementById('maincasual').style.visibility='hidden';
}
