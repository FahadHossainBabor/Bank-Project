document.getElementById("btn-submit").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (
    email === "fahadhossainbabor2002@gmail.com" &&
    password === "fahad#115530"
  ) {
    window.location.href = "bank.html";
  } else {
    alert("Tui password bhule gesos");
  }
});
