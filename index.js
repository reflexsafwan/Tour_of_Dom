// get element by tagname
// const tagList = document.getElementsByTagName("h1");
// const tagList1 = document.getElementsByTagName("section");
// console.log(tagList);
// console.log(tagList1);
// for (const tag of tagList) {
//   console.log(tag.innerText);
//   tag.style.color = "red";
// }
// for (let i = 0; i < tagList.length; i++) {
//     console.log(tagList[i]);
// }

// get element by class name

// const classList = document.getElementsByClassName("test");
// console.log(classList);
// for (const value of classList) {
//   //   console.log(value);
//   value.style.backgroundColor = "blue";
//   value.style.padding = " 20px";
// }

// get element by id

// const myHeading = document.getElementById("heading");
// console.log(myHeading.innerText);
// myHeading.style.textAlign = "center";
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.padding = "20px";
// document.getElementById("heading").style.color = "green";

// query selector

// const myElement = document.querySelector("#heading");
// console.log(myElement);

// const myElement2 = document.querySelector(".test");
// console.log(myElement2);
// It returns only first item

// spefic items selecting via query selector
// const mySpecificElement = document.querySelector(".test:last-child");
// console.log(mySpecificElement);

// const mySpecificElement2 = document.querySelector(".test:nth-child(3)");
// console.log(mySpecificElement2);

// query selector all

// const myElement3 = document.querySelectorAll(".test");
// console.log(myElement3);

// for (const element of myElement3) {
//   console.log(element.innerText);
// }
// dynamic style

// const myHeading = document.getElementsByClassName("first-heading");
// console.log(myHeading);
// myHeading[0].style.color = "red";

// adding class via js

// const myHeading = document.getElementById("heading");

// first way to add class

// myHeading.className = "myclass";

// second way to add class

// myHeading.classList.add("hello");

// to remove class

// myHeading.classList.remove("hello");

// Manupulating Dom

// create element

// const parentContainer = document.getElementById("container-details");
// console.log(parentContainer);
// const afterElement = document.querySelector(".li-container:last-child");
// console.log(afterElement.innerText);
// const myLi = document.createElement("li");
// console.log(myLi);
// myLi.innerText = "Four";

// first way to set created element

// parentContainer.insertBefore(myLi, afterElement);

// second way

// const parentContainer2 = document.getElementById("container-details");
// const myLi2 = document.createElement("li");
// console.log(myLi);
// myLi.innerText = "Five";
// parentContainer2.appendChild(myLi);

// const section = document.getElementById("section-container");
// const div = document.createElement("div");
// const h1 = document.createElement("h1");
// h1.innerText = "exploring dynamic js";
// div.appendChild(h1);
// section.appendChild(div);

// set attribute
document.getElementById("attribute").setAttribute("class", "attr");
const myAttribute = document.getElementById("attribute").getAttribute("class");
console.log(myAttribute);
