function changeDiv(evt, divName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for(let divBloc of tabcontent) {
    divBloc.style.display = "none";
  }

  document.getElementById(divName).style.display = "flex";
}
