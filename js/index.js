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

///////////////////INSTANCES///////////////////////////
const newPlayer = new Caterpillar();

/////////////EVENT LISTENERS//////////////////////////

document.addEventListener("keydown", function (element) {
  if (element.code === "ArrowUp") {
    newPlayer.moveUp();
  } else if (element.code === "ArrowDown") {
    newPlayer.moveDown();
  }
});
