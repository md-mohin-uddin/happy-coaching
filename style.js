const getFreeGuide = () => {
  document.getElementsByClassName("get-guide");
  alert("here your free guide");
};

function subscribe() {
  var email = document.querySelector(".input-email").value;

  if (email.trim() !== "") {
    console.log("Subscribing with email:", email);

    document.querySelector(".input-email").value = "";
  } else {
    console.log("Please enter a valid email address");
  }
}
