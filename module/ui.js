//该模块用于将用户显示到页面上
import * as map from './map.js';





let divContainer = document.getElementById('game');
let pieceWidth = 40; //每一个小块的宽度
let pieceHeight = 40; //每一个小块的高度



/**
 * 设置div宽高
 */
function setDivContainer() {
    divContainer.style.width = pieceWidth * map.colNumber + "px";
    divContainer.style.height = pieceHeight * map.rowNumber + "px";
}

/**
 * 判断该行,该列是不是正确位置
 * @param {*} row 
 * @param {*} col 
 */
function isCorrect(row, col) {
    for(var i = 0; i < map.correct.length; i++){
        var point = map.correct[i]; //拿到其中一个正确坐标
        if(point.row === row && point.col === col) {
            return true;
        }
    }
    return false;

    // return map.correct.find(p => p.row === row && p.col == col) !== undefined;
}




/**
 * 根据行和列,创建内容放入容器
 */
function setOnePiece(row, col) {
    
   var value = map.content[row][col]; //取出地图相应位置的值
   
    var div = document.createElement('div');
    div.className = "item";
    //调整div位置
    div.style.left = col * pieceWidth + "px";
    div.style.top = row * pieceHeight + "px";

    //当前位置是否是正确位置
    var correct = isCorrect(row, col);
    if(value === map.PLAYER) {
        div.classList.add("player");
    }
    else if(value === map.WALL) {
        div.classList.add('wall');

    }
    else if(value === map.BOX) { 
        if(correct) {
            div.classList.add("correct-box")
        }
        else{
            div.classList.add("box")
        }
    }
    else {
        //空白
        if(correct) {
            div.classList.add('correct');
        }else {
            return; //只是一个普通空白
        }
    }
    divContainer.appendChild(div);
}


/**
 * 根据地图在页面上设置相应的元素
 */
function setContent() {
    //1.清空容器
    divContainer.innerHTML = "";
    //2.遍历地图内容,设置元素
    for(var row = 0; row < map.rowNumber; row++) {
        for(var col = 0; col < map.colNumber; col++) {
           setOnePiece(row, col);
        }
    }
}


/**
 * 该函数用于显示地图
 */
export default function () {
    //1.设置div宽度
    setDivContainer();
    //2.设置地图的内容
    setContent();
}