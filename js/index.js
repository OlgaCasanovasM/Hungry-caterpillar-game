////////////CLASSES///////////////

class Caterpillar {
  constructor() {
    this.width = 20;
    this.height = 10;
    this.positionX = 20;
    this.positionY = 15;
    this.caterpillar = null;

    this.displayCaterpillar();
  }
  displayCaterpillar() {
    this.caterpillar = document.createElement("div");
    this.caterpillar.id = "caterpillar";
    this.caterpillar.style.width = this.width + "vw";
    this.caterpillar.style.height = this.height + "vh";
    this.caterpillar.style.left = this.positionX + "vw";
    this.caterpillar.style.bottom = this.positionY + "vh";
    const tunnel = document.getElementById("tunnel");
    tunnel.appendChild(this.caterpillar);
  }
  moveUp() {
    this.positionY++;
    this.caterpillar.style.bottom = this.positionY + "vh";
  }
  moveDown() {
    this.positionY--;
    this.caterpillar.style.bottom = this.positionY + "vh";
  }
}

class JunkFood {
  constructor() {
    this.width = 5;
    this.height = 5;
    this.positionX = 100;
    this.positionY = Math.floor(Math.random() * (60 - this.height + 1));
    this.junk = null;

    this.displayJunk();
  }
  displayJunk() {
    this.junk = document.createElement("div");
    this.junk.id = "junk-food";
    this.junk.style.width = this.width + "vw";
    this.junk.style.height = this.height + "vh";
    this.junk.style.left = this.positionX + "vw";
    this.junk.style.bottom = this.positionY + "vh";
    const tunnel = document.getElementById("tunnel");
    tunnel.appendChild(this.junk);
  }

  moveLeft() {
    this.positionX--;
    this.junk.style.left = this.positionX + "vw";
  }
}

////////////HTML ELEMENTS///////////////

const gameView = document.querySelector("#game-view");
const endView = document.querySelector("#end-view");
const tunnel = document.querySelector("#tunnel");

////////////BOTH VIEWS///////////////

gameView.style.display = "block";
endView.style.display = "none";

///////////////////INSTANCES///////////////////////////
const newPlayer = new Caterpillar();

const newJunkArr = [];

///////////////////INTERVALS and OTHER FUNCTIONS///////////////////////////

setInterval(function () {
  const newJunk = new JunkFood();
  newJunkArr.push(newJunk);
}, 2000);

setInterval(function () {
  newJunkArr.forEach((element, index) => {
    element.moveLeft();
    if (
      newPlayer.positionX < element.positionX + element.width &&
      newPlayer.positionX + newPlayer.width > element.positionX &&
      newPlayer.positionY < element.positionY + element.height &&
      newPlayer.positionY + newPlayer.height > element.positionY
    ) {
      element.junk.remove();
      newJunkArr.splice(index, 1);

      newPlayer.width++;
      newPlayer.height++;
      newPlayer.caterpillar.style.width = newPlayer.width + "vw";
      newPlayer.caterpillar.style.height = newPlayer.height + "vh";
    }
  });

  touchTunnel();
}, 100);

function touchTunnel() {
  const tunnelHeight = tunnel.getBoundingClientRect().height;

  if (
    newPlayer.positionY <= 0 ||
    newPlayer.positionY + newPlayer.height >=
      (tunnelHeight / window.innerHeight) * 100
  ) {
    gameView.style.display = "none";
    endView.style.display = "block";
  }
}

function restartGame() {
  //going back to initial view
  gameView.style.display = "block";
  endView.style.display = "none";

  // setting catterpillar to its original size
  newPlayer.width = 20;
  newPlayer.height = 10;
  newPlayer.positionX = 20;
  newPlayer.positionY = 30;
  newPlayer.caterpillar.style.width = newPlayer.width + "vw";
  newPlayer.caterpillar.style.height = newPlayer.height + "vh";
  newPlayer.caterpillar.style.left = newPlayer.positionX + "vw";
  newPlayer.caterpillar.style.bottom = newPlayer.positionY + "vh";

  // getting rid of all junk food
  newJunkArr.forEach((junk) => {
    junk.junk.remove(); // Remove from DOM
  });
  newJunkArr.length = 0; // remove from array
}
/////////////EVENT LISTENERS//////////////////////////

document.addEventListener("keydown", function (element) {
  if (element.code === "ArrowUp") {
    newPlayer.moveUp();
  } else if (element.code === "ArrowDown") {
    newPlayer.moveDown();
  }
});

const restartButton = document.getElementById("play-again");
restartButton.addEventListener("click", function () {
  restartGame();
});
//////THINGS FOR LATER USE/////////
