import { playerMove, isWin } from "./play.js";
import showUI from "./ui.js";
//完成整个游戏

showUI();
export var over = false;
window.onkeydown = function (e) {
  var result = false;
  if (e.key === "ArrowUp") {
    result = playerMove("up");
  } else if (e.key === "ArrowDown") {
    result = playerMove("down");
  } else if (e.key === "ArrowLeft") {
    result = playerMove("left");
  } else if (e.key === "ArrowRight") {
    result = playerMove("right");
  }

  if (result) {
    showUI();
    if (isWin()) {
      alert("游戏胜利");
      over = true;
    }
  }
};

let div = document.getElementsByClassName("btn")[0].children;
for (let i = 0; i < div.length; i++) {
  div[i].onclick = function () {
    var result = false;
    if (this.innerText === "up") {
      result = playerMove("up");
    } else if (this.innerText === "down") {
      result = playerMove("down");
    } else if (this.innerText === "left") {
      result = playerMove("left");
    } else if (this.innerText === "right") {
      result = playerMove("right");
    }

    if (result) {
      showUI();
      if (isWin()) {
        alert("游戏胜利");
        over = true;
      }
    }
    
  };
}
