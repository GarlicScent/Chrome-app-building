const gameForm = document.getElementById("gameForm");
const gameMaxNumber = document.getElementById("gameMaxNumber");
const userNumber = document.getElementById("userNumber");
const gameStatus = document.getElementById("gameStatus");
const gameResult = document.getElementById("gameResult");

const handleGameSubmit = (event) => {
  event.preventDefault();

  const gameMaxNo = parseInt(gameMaxNumber.value);
  const userNo = parseInt(userNumber.value);
  const machineNo = Math.floor(Math.random() * gameMaxNo);

  randomNumberGame(gameMaxNo, userNo, machineNo);

  if (gameMaxNo < 0) {
    gameStatus.textContent = `You need to put positive Number on first input`;
    gameResult.textContent = "Do it again";
  } else if (userNo > gameMaxNo) {
    gameStatus.textContent = `You need to put less than ${gameMaxNo}`;
    gameResult.textContent = "Do it again";
  } else {
  }
};

function randomNumberGame(gameMaxNo, userNo, machineNo) {
  if (userNo !== machineNo) {
    gameStatus.textContent = `You chose: ${userNo}, the machine chose: ${machineNo}`;
    gameResult.textContent = "You Lost!";
  } else {
    gameStatus.textContent = `You chose: ${userNo}, the machine chose: ${machineNo}`;
    gameResult.textContent = "You Win!";
  }
}

gameForm.addEventListener("submit", handleGameSubmit);
