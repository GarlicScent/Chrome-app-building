const clockTitle = document.querySelector(".js-clock");

function showTimeLeft() {
  const eveDate = new Date("2022-12-25T00:00:00");
  const today = new Date();
  const timeDiff = eveDate - today;

  const dayLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hourLeft = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minuteLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const secondLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

  clockTitle.innerText = `${String(dayLeft).padStart(2, "0")}d ${String(
    hourLeft
  ).padStart(2, "0")}h ${String(minuteLeft).padStart(2, "0")}m ${String(
    secondLeft
  ).padStart(2, "0")}s`;
}

showTimeLeft();
setInterval(showTimeLeft, 1000);
