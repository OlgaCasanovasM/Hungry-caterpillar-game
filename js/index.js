////////////CLASSES///////////////

class Caterpillar {
  constructor() {
    this.width = 20;
    this.height = 10;
    this.positionX = 20;
    this.positionY = 30;
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
    this.width = 10;
    this.height = 10;
    this.positionX = 100;
    this.positionY = 30;
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

///////////////////INSTANCES///////////////////////////
const newPlayer = new Caterpillar();

const newJunkArr = [];

setInterval(function () {
  const newJunk = new JunkFood();
  newJunkArr.push(newJunk);
}, 2000);

setInterval(function () {
  newJunkArr.forEach((element) => {
    element.moveLeft();
  });
}, 100);

/////////////EVENT LISTENERS//////////////////////////

document.addEventListener("keydown", function (element) {
  if (element.code === "ArrowUp") {
    newPlayer.moveUp();
  } else if (element.code === "ArrowDown") {
    newPlayer.moveDown();
  }
});

//////THINGS FOR LATER USE/////////
