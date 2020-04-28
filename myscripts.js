// JavaScript File
// let statements
let circleDiameter;
let circleRadius;
let circleCircumference;
let circleArea;
const pi = 3.14;
// code to find area and circ.
function Math () {
  // calculates radius
  circleDiameter = document.getElementById("diameter").value;
  // d/2 = r
  circleRadius = circleDiameter / 2;
  // pi*d = circumference
  circleCircumference = pi * circleDiameter;
  // pi*r^2 = Area
  circleArea = pi * circleRadius * circleRadius;
  alert("The area of the cirlce is " + circleArea + ". The circumference of the circle is " + circleCircumference + ".");
}
// event listner
document.getElementById("myBtn").addEventListener("click", Math);