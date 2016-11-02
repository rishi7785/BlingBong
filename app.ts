function Calculate() {
  let year = document.getElementById("leapyear").value;
  document.getElementById("answer").innerText = LeapYearFinder(year);
}


function LeapYearFinder (year) {
if (year % 4 === 0) {
  return "Its a Leap Year"
}
}
