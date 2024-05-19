function newSquare() {
    let files = 'abcdefgh';
    let fileNum = Math.floor(Math.random() * 8 + 1);
    let file = files.charAt(fileNum - 1);
    let rank = Math.floor(Math.random() * 8 + 1);

    if (fileNum % 2 === 0 && rank % 2 === 0) {
        squareColor = "Dark";
    } else if (fileNum % 2 === 1 && rank % 2 === 1) {
        squareColor = "Dark";
    } else {
        squareColor = "Light";
    }

    document.getElementById('rank').innerHTML = rank;
    document.getElementById('file').innerHTML = file;
    document.getElementById('square-color').innerHTML = squareColor;
    document.getElementById('solution').style.visibility = "hidden";
    document.getElementById('new-square').style.display = "none";
    document.getElementById('show-solution').style.display = "inline";
}
function showSolution() {
    document.getElementById('solution').style.visibility = "visible";
    document.getElementById('new-square').style.display = "inline";
    document.getElementById('show-solution').style.display = "none";
}