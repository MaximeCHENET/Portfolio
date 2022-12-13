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


/* A mettre à jour plus tard

Liste déroulante pour documentations :

<html>
<head>
  <title>Menu déroulant</title>
</head>
<body>
  <h1>Menu déroulant</h1>
  <select id="menu">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
  <p id="output"></p>
  <script>
    // Récupère une référence au menu déroulant
    var menu = document.getElementById('menu');

    // Récupère une référence au paragraphe
    var output = document.getElementById('output');

    // Écoute l'événement de changement sur le menu déroulant
    menu.addEventListener('change', function() {
      // Récupère la valeur de l'option sélectionnée
      var selectedOption = this.value;

      // Met à jour le texte du paragraphe en fonction de l'option sélectionnée
      output.innerText = 'Vous avez choisi l\'option : ' + selectedOption;
    });
  </script>
</body>
</html>
*/