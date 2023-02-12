let value = 0;

document.getElementById("btn-plus").addEventListener("click", () => {
  value += 1;
  console.log(value);
  document.getElementById("counter").innerText = value;
});

document.getElementById("btn-minus").addEventListener("click", () => {
  value -= 1;
  document.getElementById("counter").innerText = value;
});
