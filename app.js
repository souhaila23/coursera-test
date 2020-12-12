var student ={
  name: "",
  type: "student"
};

document.addEventListener('DOMContentLoaded',contentLoad);

function contentLoad(event) {
  document.getElementById('name').addEventListener("keyUp",keyUp);
}

function keyUp(event) {
  calculateNumericOutput();
}

function calculateNumericOutput() {
  student.name = document.getElementById('name').value;

  var totalNameValue = 0;
  for (var i = 0; i < student.name.length; i++) {
    totalNameValue += student.name.charCodeAt[i];
  }

  //insert result into page
  var output = "Total numeric value person's name is:" + totalNameValue;
  document.getElementById('output').innertext = output;

}
