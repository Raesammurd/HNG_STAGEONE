const currentDaySpan = document.querySelector('span[data-testid="currentDay"]');
const currentTimeSpan = document.querySelector('span[data-testid="currentTimeUTC"]');

function updateDateTime() {
  const now = new Date();

  // Get the day of the week (0-6)
  const day = now.getDay();
  const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  currentDaySpan.textContent = dayList[day];

  // Get the time in UTC format (24-hour clock)
  const hours = now.getUTCHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  currentTimeSpan.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the time initially and call it every second for continuous display
updateDateTime();
setInterval(updateDateTime, 1000);