document.getElementById("review-btn").addEventListener("click", () => {
  let element = document.getElementById("floatingTextarea2");
  elementValue = element.value;
  console.log(elementValue);
  const ulELement = document.getElementById("commnet-container");
  const p = document.createElement("p");
  p.innerText = elementValue;

  ulELement.appendChild(p);
  element.value = "";
});
