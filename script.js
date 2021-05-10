// Everything is set to 0 so it can change based on user input
let bA = 0
let bB = 0
let height = 0
let area = 0

// This makes the button react once it is clicked
document.getElementById('button').addEventListener('click', math)

// These are the commands to calculate the area and when the calculate button is clicked, it will send an alert of the area calculated
function math () {
  bA = document.getElementById('base-a').value
  bA = parseInt(bA)
  bB = document.getElementById('base-b').value
  bB = parseInt(bB)
  height = document.getElementById('height').value
  height = parseInt(height)
  area = (bA + bB) / 2 * height
  alert(area)
}
