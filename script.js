function validateForm() {
  var input = document.getElementById("userInput").value;

  if (input == "it" || input == "IT") {
    window.location.href = "searchresults.html";
    return false;
  } else if (input == "via" || input == "VIA" || input == "ViA") {
    window.location.href = "profile.html";
    return false;
  }
}