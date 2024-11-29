function displayDate() {
  const today = new Date();
  // Format the date as DD/MM/YYYY
  const formattedDate = today.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  const container = document.getElementById('date-container');
  if (container) {
    container.textContent = formattedDate;
  }
}
displayDate();


function displayTime() {
  const now = new Date();
  // Format the time as HH:MM:SS
  const formattedTime = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const container = document.getElementById('time-container');
  if (container) {
    container.textContent = formattedTime;
  }
}
setInterval(displayTime, 1000);
displayTime();

function reset() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = '';
  }
}