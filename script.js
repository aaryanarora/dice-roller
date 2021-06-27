function roll() {
    var dicePics1 = [
        "<img src='./image/pawn.png'>",
        "<img src='./image/knight.png'>",
        "<img src='./image/bishop.png'>",
        "<img src='./image/rook.png'>",
        "<img src='./image/queen.png'>",
        "<img src='./image/king.png'>"
    ]

    var dicePics2 = [
      "<img src='./image/pawn.png'>",
      "<img src='./image/knight.png'>",
      "<img src='./image/bishop.png'>",
      "<img src='./image/rook.png'>",
      "<img src='./image/queen.png'>",
      "<img src='./image/king.png'>"
    ]

    var dicePics3 = [
      "<img src='./image/pawn.png'>",
      "<img src='./image/knight.png'>",
      "<img src='./image/bishop.png'>",
      "<img src='./image/rook.png'>",
      "<img src='./image/queen.png'>",
      "<img src='./image/king.png'>"
    ]

    one.innerHTML = dicePics1[Math.floor(Math.random() * dicePics1.length)];
    two.innerHTML = dicePics2[Math.floor(Math.random() * dicePics2.length)];
    three.innerHTML = dicePics3[Math.floor(Math.random() * dicePics3.length)];
}
