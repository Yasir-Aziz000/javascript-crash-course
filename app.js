//Q1
function Adder(num) {
    return function(x) {
      return num + x;
    };
  }
  const addFive = Adder(5);
  console.log(addINGFive(10)); 
  console.log(addINGFive(20)); 

  //Q2
  function searchingArray(array, value) {
    if (array.length === 0) {
      return false;
    }
    if (array[0] === value) {
      return true;
    }
    return searchingArray(array.slice(1), value);
  }

  //Q3
  function addParagraph(text) {
    const paragraph = document.createElement("p"); 
    paragraph.textContent = text; 
    document.body.appendChild(paragraph); 
  }
  addParagraph("This is a new paragraph added to the bottom of the HTML document!"); 

  //Q4
  function addListItem(text) {
    const ul = document.querySelector("ul"); 
    const li = document.createElement("li"); 
    li.textContent = text; 
    ul.appendChild(li); 
  }
  addListItem("New list item"); 

  //Q5

  function changeBgColor(element, color) {
    element.style.backgroundColor = color;
  }
  const myElement = document.getElementById("myElement");
  changeBgColor(myElement, "blue");

  //Q6
  function saveToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  const myObj = { name: "John", age: 30 };
  saveToLocalStorage("myObj", myObj);

  //Q7

  function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  }
  const storedObj = getFromLocalStorage("myObj");
  console.log(storedObj);

  //Q8

  function saveObjectToLocalStorage(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        localStorage.setItem(key, JSON.stringify(obj[key]));
      }
    }
    const newObj = {};
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        newObj}}
      }