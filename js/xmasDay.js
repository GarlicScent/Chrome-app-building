const clockTitle = document.querySelector(".js-clock");

function showTimeLeft() {
  const xmas = new Date(`${new Date().getFullYear()}-12-25T00:00:00`);
  const today = new Date();
  const timeDiff = xmas - today;

  const secondsInMs = Math.floor(timeDiff / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);

  const days = Math.floor(hoursInMs / 24);
  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;

  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m`;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;

  clockTitle.innerText = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

showTimeLeft();
setInterval(showTimeLeft, 1000);
