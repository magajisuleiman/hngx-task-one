//select html element for current date and time
const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

//function to get current day of the week
function getCurrentDayOfWeek(){
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  return daysOfWeek[dayIndex];
}

//function to format time 
function formatTime(hours, minutes, seconds) {
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

//function to get current utc time 
function updateTime(){
  const currentDate = new Date()
  const utcHours = currentDate.getUTCHours()
  const utcMinutes = currentDate.getUTCMinutes()
  const utcSeconds = currentDate.getUTCSeconds()

  // Update the inner HTML of the elements with the current time
  dayOfWeekElement.innerHTML = getCurrentDayOfWeek();
  utcTimeElement.innerHTML = formatTime(utcHours, utcMinutes, utcSeconds);
  
}

updateTime();

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);
