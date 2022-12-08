class Player {
  constructor(name) {
    this.name = name;
    this.hp = 100;
  }

  strike(opponent) {
    let damage = Math.ceil(Math.random() * 10);
    opponent.hp -= damage;
    if (opponent.hp <= 0) {
      opponent.hp = 0;
    }
    console.log(this.name, "striked");
    updateGame();
  }
  heal() {
    let healAmount = Math.ceil(Math.random() * 5);
    this.hp += healAmount;
    if (this.hp > 100) {
      this.hp = 100;
    }
    console.log(this.name, "healed");
    updateGame();
  }
}
//  -------------------------- UPDATING THE DOM ------------------
function updateGame() {
  const p1Name = document.getElementById("p1Name");
  const p2Name = document.getElementById("p2Name");

  p1Name.innerText = p1.name;
  p2Name.innerText = p2.name;

  const p1Health = document.getElementById("p1Health");
  const p2Health = document.getElementById("p2Health");
  p1Health.innerText = p1.hp;
  p2Health.innerText = p2.hp;

  if (p1.hp == 0) {
    winner(p2);
  }
  if (p2.hp == 0) {
    winner(p1);
  }
  function winner(player) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = `${player.name} WINS`;
    isOver = true;
    console.log("game ended");
    console.log(isOver);
  }
}

// -------------- PLAYERS--------
let p1 = new Player("Chou");
let p2 = new Player("Paquito");

// ------------- INITIALIZING THE GAME -------------------
let isOver = false;
updateGame(p1, p2);


if (!isOver) {
  // ======================== ATTACKING ==========================-
  // ---------- Q button - PLAYER 1 ATTACKING -----------
  document.getElementById("attack1").onclick = () => {
    p1.strike(p2);
  };
  document.addEventListener("keydown", (e) => {
    if (e.key == "q") p1.strike(p2);
  });

  // ---------- A button = PLAYER 2 ATTACKING ------------
  document.getElementById("attack2").onclick = () => {
    p2.strike(p1);
  };
  document.addEventListener("keydown", (e) => {
    if (e.key == "p") p2.strike(p1);
  });

  
  // ========================= HEALING ============================

  // ----- A-button PLAYER 1 HEALING--------------
  document.getElementById("heal1").onclick = () => {
    p1.heal();
  };
  document.addEventListener("keydown", (e) => {
    if (e.key == "a") p1.heal();
  });

  
  // ----- L-button PLAYER 2 HEALING--------------
  document.getElementById("heal1").onclick = () => {
    p2.heal();
  };
  document.addEventListener("keydown", (e) => {
    if (e.key == "l") p2.heal();
  });
}
// =================================== RESET ====================================


const resetButton = document.getElementById("reset");

resetButton.onclick = () => {
  p1.hp = 100;
  p2.hp = 100;
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = "";
  updateGame();
};
