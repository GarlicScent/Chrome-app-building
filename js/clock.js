const clock = document.querySelector(".js-clock");

function handleCurrentTime() {
  const timeNow = new Date();
  const hoursNum = timeNow.getHours();
  const minutesNum = timeNow.getMinutes();
  const secondsNum = timeNow.getSeconds();

  const hours = String(hoursNum).padStart(2, "0");
  const minutes = String(minutesNum).padStart(2, "0");
  const seconds = String(secondsNum).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

handleCurrentTime();
setInterval(handleCurrentTime, 1000);
