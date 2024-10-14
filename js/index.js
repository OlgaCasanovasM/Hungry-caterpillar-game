class Caterpillar {
  constructor() {
    this.width = 20;
    this.height = 10;
    this.positionX = 20;
    this.positionY = 30;

    this.displayCaterpillar();
  }
  displayCaterpillar() {
    const caterpillar = document.createElement("div");
    caterpillar.id = "caterpillar";
    caterpillar.style.width = this.width + "vw";
    caterpillar.style.height = this.height + "vh";
    caterpillar.style.left = this.positionX + "vw";
    caterpillar.style.bottom = this.positionY + "vh";
    const tunnel = document.getElementById("tunnel");
    tunnel.appendChild(caterpillar);
  }
  moveUp() {
    this.positionY++;
  }
  moveDown() {
    this.positionY--;
  }
}

const caterpillar = new Caterpillar();
