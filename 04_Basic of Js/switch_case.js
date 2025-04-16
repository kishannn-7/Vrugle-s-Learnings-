// +++++++++++  SWITCH-CASE  +++++++++++ 

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Almost weekend");
    break;
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Just another day");
}


let color = "red";
switch (color) {
  case "red":
  case "blue":
    console.log("Primary color");
    break;
  case "green":
    console.log("Secondary color");
    break;
  default:
    console.log("Unknown color");
}


let rating = 5;
switch (rating) {
  case 5:
    console.log("Excellent");
    break;
  case 4:
    console.log("Good");
    break;
  case 3:
    console.log("Average");
    break;
  default:
    console.log("Poor");
}


function getDayName(number) {
  switch (number) {
    case 0: return "Sunday";
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    default: return "Invalid";
  }
}
console.log(getDayName(2)); // Tuesday
