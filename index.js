function myFunction() {
    let x = document.getElementById("myId");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }