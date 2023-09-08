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

//function to get current utc time 
function getCurrentUTCTime(){
  const currentDate = new Date()
  const milliseconds = currentDate.getUTCMilliseconds()
  
  return `${milliseconds}ms`
}

dayOfWeekElement.innerHTML = getCurrentDayOfWeek();
utcTimeElement.innerHTML = getCurrentUTCTime();
