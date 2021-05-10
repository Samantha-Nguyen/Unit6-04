// everything is set to 0
let bA = 0
let bB = 0
let height = 0
let area = 0

// when the button is clicked, the math calculate
document.getElementById('button').addEventListener('click', math)

// this is how to solve the area of a trapezoid
function math () {
  bA = document.getElementById('baseA').value
  bA = parseInt(bA)
  bB = document.getElementById('baseB').value
  bB = parseInt(bB)
  height = document.getElementById('height').value
  height = parseInt(height)
  area = (bA + bB) / 2 * height
  alert(area)
}
