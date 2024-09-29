// This code creates a functional analog clock using JavaScript. Its purpose is to display the current time with rotating hour, minute, and second hands on a web page.

// The code doesn't take any direct inputs from the user. Instead, it relies on the computer's internal clock to get the current time. It then outputs this time visually by rotating the clock hands on the webpage.

// Here's how the code achieves its purpose:

// First, it selects three HTML elements representing the hour, minute, and second hands of the clock. These elements are stored in variables named 'hr', 'min', and 'sec'.

// The main logic is contained in the 'displayTime' function. This function is responsible for updating the clock's appearance. It starts by getting the current date and time using JavaScript's built-in Date object. From this, it extracts the current hour, minute, and second.

// Next, the function calculates how much each clock hand should rotate. The rotation is based on the current time. For example, the hour hand rotates 30 degrees for each hour plus a small additional amount based on the minutes. The minute and second hands rotate 6 degrees for each minute or second, respectively.

// After calculating the rotations, the function applies these rotations to the clock hand elements using CSS transforms. This is what makes the clock hands move on the webpage.

// Finally, the code uses 'setInterval' to call the 'displayTime' function every 1000 milliseconds (or every second). This ensures that the clock updates continuously, providing a real-time display of the current time.

// In summary, this code creates a dynamic analog clock that updates in real-time, transforming the current time into visual rotations of clock hands on a webpage. It's a great example of how JavaScript can be used to create interactive, time-based elements in web development.

let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
  let date = new Date();

  // Getting hour, mins, secs from date
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
