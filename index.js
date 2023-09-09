

const mytrack= 'FrontEnd Track';
const slackUserName = 'Ebenezer Onuche';

const dayOfTheWeek = ()=>{
const date = new Date();
const day = date.getDay();

var answer;
switch(day) {
  case 6:
    answer = "Saturday";
    break;
  case 5:
    answer = "Friday";
    break;
  case 4:
    answer = "Thursday";
    break;
  case 3:
    answer = "Wednesday";
    break;
  case 2:
    answer = "Tuesday";
    break;
  case 1:
    answer = "Monday";
    break;
  case 0:
    answer = "Sunday";
    break;  
  default:
    answer = "Not a day of the week";}

document.getElementById("currentDayOfTheWeek").innerHTML = answer; 

};


const utcTime = ()=>{
  const date = new Date();
  let utcDate = date.getUTCMilliseconds();
    document.getElementById("currentUTCTime").innerHTML = `${utcDate} `; 
  
  
}

setInterval(utcTime, 250);
document.getElementById("myTrack").innerHTML = mytrack; 
document.getElementById("slackUserName").innerHTML = slackUserName; 
dayOfTheWeek();

