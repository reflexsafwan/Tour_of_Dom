// event handler

function makeRed() {
  document.body.style.backgroundColor = "red";
  document.getElementById("heading").innerText = "Testing dom via events";
}

// event listener

const myEvent = document
  .getElementById("blue-btn")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
  });
