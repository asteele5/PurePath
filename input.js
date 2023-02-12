var walk = false;

function check()
  {
      if(document.getElementById("walk").checked) {
    walk = true;
  }

var select;
window.onload = function () {
    select = document.getElementById('dropdown');
    console.log(select);
}

function changeHiddenInput(objDropDown) {
    console.log(objDropDown);
    var objHidden = document.getElementById("hiddenInput");
    objHidden.value = objDropDown.value;
    var commuteTime = objHidden.value;
    result.innerHTML = a || "";
}
