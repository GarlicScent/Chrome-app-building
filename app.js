const gameForm = document.getElementById("gameForm");
const gameMaxNumber = document.getElementById("gameMaxNumber");
const userNumber = document.getElementById("userNumber");
const gameStatus = document.getElementById("gameStatus");
const gameResult = document.getElementById("gameResult");

const handleGameSubmit = (event) => {
  const gameMaxNo = parseInt(gameMaxNumber.value);
  const userNo = parseInt(userNumber.value);
  const machineNo = Math.floor(Math.random() * gameMaxNo);

  if (gameMaxNo <= 0 || userNo < 0) {
    alert(`You need to put positive Number on first input`);
  } else if (userNo > gameMaxNo) {
    alert(`You need to put less than ${gameMaxNo}`);
  } else {
    event.preventDefault();
    randomNumberGame(gameMaxNo, userNo, machineNo);
  }
};

function randomNumberGame(gameMaxNo, userNo, machineNo) {
  if (userNo !== machineNo) {
    gameStatus.textContent = `You chose: ${userNo}, the machine chose: ${machineNo}`;
    gameResult.textContent = "You Lost!";
  } else {
    gameStatus.textContent = `You chose: ${userNo}, the machine chose: ${machineNo}`;
    gameResult.textContent = "You Win!";
    console.log("good job");
  }
}

gameForm.addEventListener("submit", handleGameSubmit);
