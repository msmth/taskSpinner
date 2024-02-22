// Wheel Spinner
let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let currentRotation = 0;

// Function to spin the wheel
function spinWheel() {
  let randomDegrees = Math.ceil(Math.random() * 3600);
  currentRotation += randomDegrees;
  wheel.style.transition = 'transform 3s ease-out';
  wheel.style.transform = 'rotate(' + currentRotation + 'deg)';
}

spinBtn.onclick = function () {
  // Spin the wheel when the "Spin" button is clicked
  spinWheel();
};

// To Do List //
var myNodeList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodeList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00d7");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Function to add a new list item and update the wheel
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    // Update the wheel immediately after adding a new item
    updateWheel();
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      // Update the wheel after removing an item
      updateWheel();
    }
  }
}

// Function to update the wheel with values from myUL
function updateWheel() {
  var spinner = document.querySelector(".wheel");
  var todoList = document.getElementById("myUL");
  var todoItems = todoList.getElementsByTagName("li");

  // Remove existing spinner items
  while (spinner.firstChild) {
    spinner.removeChild(spinner.firstChild);
  }

  // Add new spinner items based on to-do list
  for (var i = 0; i < todoItems.length; i++) {
    var value = todoItems[i].innerText;
    var div = document.createElement("div");
    div.classList.add("number");
    div.style.setProperty("--i", i + 1);
    div.style.setProperty("--clr", getRandomColor());
    div.innerHTML = "<span>" + value + "</span>";
    spinner.appendChild(div);
  }
}

// Function to get a random color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}