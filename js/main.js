document.querySelector(".form__auth-btn").onclick = function (e) {
  const userPassFirst = document.querySelector("#password1").value;
  const userPassSecond = document.querySelector("#password2").value;
  if (userPassFirst == "" || userPassSecond == "") {
    document.getElementById("password1").style = "border: 1px solid red";
    document.getElementById("password2").style = "border: 1px solid red";
    e.preventDefault()
  }
  else if (userPassFirst != userPassSecond) {
    document.getElementById("password1").style = "border: 1px solid red";
    document.getElementById("password2").style = "border: 1px solid red";
    e.preventDefault()
    return false;
  } else if (userPassFirst == userPassSecond) {
    document.getElementById("password1").style = "border: 1px solid green";
    document.getElementById("password2").style = "border: 1px solid green";
  }
  return true;
};

