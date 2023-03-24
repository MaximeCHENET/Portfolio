//Display selected element
const changeDiv = (evt, divName) => {
  var tabcontent;

  tabcontent = document.getElementsByClassName("tabcontent");
  for(let divBloc of tabcontent) {
    divBloc.style.display = "none";
  }

  document.getElementById(divName).style.display = "flex";
}


//Display selected file
const selectFile = (evt, fileName) => {
  var fileContent;

  fileContent = document.getElementsByClassName("fileContent");
  for(let fileBloc of fileContent) {
    fileBloc.style.display = "none";
  }

  document.getElementById(fileName).style.display = "flex";
}