// // ____DATA DEFINITIONS____ // //

// Board is List[List[Int]] or false
// interp. as a sudoku board, or false if the given board is invalid

function clearInputBoard() {
    document.getElementById("1").value = "";
    document.getElementById("2").value = "";
    document.getElementById("3").value = "";
    document.getElementById("4").value = "";
    document.getElementById("5").value = "";
    document.getElementById("6").value = "";
    document.getElementById("7").value = "";
    document.getElementById("8").value = "";
    document.getElementById("9").value = "";

    document.getElementById("10").value = "";
    document.getElementById("11").value = "";
    document.getElementById("12").value = "";
    document.getElementById("13").value = "";
    document.getElementById("14").value = "";
    document.getElementById("15").value = "";
    document.getElementById("16").value = "";
    document.getElementById("17").value = "";
    document.getElementById("18").value = "";

    document.getElementById("19").value = "";
    document.getElementById("20").value = "";
    document.getElementById("21").value = "";
    document.getElementById("22").value = "";
    document.getElementById("23").value = "";
    document.getElementById("24").value = "";
    document.getElementById("25").value = "";
    document.getElementById("26").value = "";
    document.getElementById("27").value = "";

    document.getElementById("28").value = "";
    document.getElementById("29").value = "";
    document.getElementById("30").value = "";
    document.getElementById("31").value = "";
    document.getElementById("32").value = "";
    document.getElementById("33").value = "";
    document.getElementById("34").value = "";
    document.getElementById("35").value = "";
    document.getElementById("36").value = "";

    document.getElementById("37").value = "";
    document.getElementById("38").value = "";
    document.getElementById("39").value = "";
    document.getElementById("40").value = "";
    document.getElementById("41").value = "";
    document.getElementById("42").value = "";
    document.getElementById("43").value = "";
    document.getElementById("44").value = "";
    document.getElementById("45").value = "";

    document.getElementById("46").value = "";
    document.getElementById("47").value = "";
    document.getElementById("48").value = "";
    document.getElementById("49").value = "";
    document.getElementById("50").value = "";
    document.getElementById("51").value = "";
    document.getElementById("52").value = "";
    document.getElementById("53").value = "";
    document.getElementById("54").value = "";

    document.getElementById("55").value = "";
    document.getElementById("56").value = "";
    document.getElementById("57").value = "";
    document.getElementById("58").value = "";
    document.getElementById("59").value = "";
    document.getElementById("60").value = "";
    document.getElementById("61").value = "";
    document.getElementById("62").value = "";
    document.getElementById("63").value = "";

    document.getElementById("64").value = "";
    document.getElementById("65").value = "";
    document.getElementById("66").value = "";
    document.getElementById("67").value = "";
    document.getElementById("68").value = "";
    document.getElementById("69").value = "";
    document.getElementById("70").value = "";
    document.getElementById("71").value = "";
    document.getElementById("72").value = "";

    document.getElementById("73").value = "";
    document.getElementById("74").value = "";
    document.getElementById("75").value = "";
    document.getElementById("76").value = "";
    document.getElementById("77").value = "";
    document.getElementById("78").value = "";
    document.getElementById("79").value = "";
    document.getElementById("80").value = "";
    document.getElementById("81").value = "";
}


const b = null

// // ____FUNCTION DEFINITIONS____ // //

function initiate() {
    // null -> null
    // populate the board with whatever the user inputted
    var startingBoard = [[]]
    var j = 0
    for (var i = 1; i <= 81; i++){
        const val = document.getElementById(String(i)).value
        if (val == ""){
            startingBoard[j].push(null)
        }
        else { 
            startingBoard[j].push(Number(val))
        }
        if (i % 9 == 0 && i < 81){
            startingBoard.push([])
            j++
        }
    }
    // console.log(startingBoard)
    const inputValid = validBoard(startingBoard)
    if (!inputValid){
        inputIsInvalid()
    }
    else{
        const answer = solve(startingBoard)
        updateBoard(answer, inputValid)
    }
}

function solve(board) {
    // THIS FUNCTION WORKS.
    // Board -> Board
    // solves the given sudoku board
    // ASSUME the given sudoku board is valid
    if (solved(board)) {
        return board
    }
    else {
        const possibilities = nextBoards(board)
        const validBoards = keepOnlyValid(possibilities)
        return searchForSolution(validBoards)
    }
}

// ______TESTS______ //
// console.log(solve(bd4))
// ______TESTS______ //


function searchForSolution(boards){
    // List[Board] -> Board or false
    // finds a valid solution to the sudoku problem
    if (boards.length < 1){
        return false
    }
    else {
        // backtracking search for solution
        var first = boards.shift()
        const tryPath = solve(first)
        if (tryPath != false){
            return tryPath
        }
        else{
            return searchForSolution(boards)
        }
    }
}


function solved(board){
    // THIS FUNCTION WORKS.
    // Board -> Boolean
    // checks to see if the given puzzle is solved
    for (var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
            if (board[i][j] == null){
                return false
            }
        }
    }
    return true
}

// ______TESTS______ //
// console.log(solved(bd3))
// ______TESTS______ //


function nextBoards(board){ 
    // THIS FUNCTION WORKS.
    // Board -> List[Board]
    // finds the first emply square and generates 9 different boards filling in that square with numbers 1...9
    var res = []
    const firstEmpty = findEmptySquare(board)
    if (firstEmpty != undefined){
        const y = firstEmpty[0]
        const x = firstEmpty[1]
        for (var i = 1; i <= 9; i++){
            var newBoard = [...board]
            var row = [...newBoard[y]]
            row[x] = i
            newBoard[y] = row
            res.push(newBoard)
        }
    }
    return res
}

function findEmptySquare(board){
    // THIS FUNCTION WORKS.
    // Board -> [Int, Int] 
    // (get the i j coordinates for the first empty square)
    for (var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
            if (board[i][j] == null) {
                return [i, j]
            }
        }
    }
}

// ______TESTS______ //
// console.log(nextBoards(bd3))
// console.log(findEmptySquare(bd3))
// ______TESTS______ //

function keepOnlyValid(boards){
    // THIS FUNCTION WORKS.
    // List[Board] -> List[Board]
    // filters out all of the invalid boards from the list
    var res = []
    for (var i = 0; i < boards.length; i++){
        if (validBoard(boards[i])){
            res.push(boards[i])
        }
    }
    return res
}

// ______TESTS______ //
// console.log(keepOnlyValid([bd1, bd2, bd3]))
// ______TESTS______ //


function validBoard(board){
    // THIS FUNCTION WORKS.
    // Board -> Boolean
    // checks to see if given board is valid
    return rowsGood(board) && columnsGood(board) && boxesGood(board)
}

function rowsGood(board){
    // THIS FUNCTION WORKS.
    // Board -> Boolean
    // makes sure there are no repeating numbers for each row
    for (var i = 0; i < 9; i++){
        var cur = []
        for (var j = 0; j < 9; j++){
            if (cur.includes(board[i][j])){
                return false
            }
            else if (board[i][j] != null){
                cur.push(board[i][j])
            }
        }
    }
    return true
}

function columnsGood(board){
    // THIS FUNCTION WORKS.
    // Board -> Boolean
    // makes sure there are no repeating numbers for each column
    for (var i = 0; i < 9; i++){
        var cur = []
        for (var j = 0; j < 9; j++){
            if (cur.includes(board[j][i])){
                return false
            }
            else if (board[j][i] != null){
                cur.push(board[j][i])
            }
        }
    }
    return true
}


function boxesGood(board){
    // transform this everywhere to update res
    const boxCoordinates = [[0, 0], [0, 1], [0, 2],
                            [1, 0], [1, 1], [1, 2],
                            [2, 0], [2, 1], [2, 2]]
    // THIS FUNCTION WORKS.
    // Board -> Boolean
    // makes sure there are no repeating numbers for each box
    for (var y = 0; y < 9; y += 3){
        for (var x = 0; x < 9; x += 3){
            // each traversal should examine each box
            var cur = []
            for (var i = 0; i < 9; i++){
                var coordinates = [...boxCoordinates[i]]
                coordinates[0] += y
                coordinates[1] += x
                if (cur.includes(board[coordinates[0]][coordinates[1]])){
                    return false
                }
                else if (board[coordinates[0]][coordinates[1]] != null){
                    cur.push(board[coordinates[0]][coordinates[1]])
                }
            }
        }
    }
    return true
}

// ______TESTS______ //
// console.log("Rows:")
// console.log(rowsGood(bd1))
// console.log(rowsGood(bd2))
// console.log(rowsGood(bd3))
// console.log("Columns:")
// console.log(columnsGood(bd1))
// console.log(columnsGood(bd2))
// console.log(columnsGood(bd3))
// console.log("Boxes:")
// console.log(boxesGood(bd1))
// console.log(boxesGood(bd2))
// console.log(boxesGood(bd3))
// console.log("Valid?")
// console.log(validBoard(bd1))
// console.log(validBoard(bd2))
// console.log(validBoard(bd3))
// ______TESTS______ //


function updateBoard(board) {
    // THIS FUNCTION WORKS.
    // Board -> null
    // update the DOM with the answer
    if (board == false){
        for (i = 1; i <= 9; i++){
            document.getElementById("row " + String(i)).innerHTML = "NO SOLUTION EXISTS TO THE GIVEN BOARD"
        }
    }
    else{
        for (var i = 1; i <= 9; i++){
            var row = ""
            for (var j = 0; j < 9; j++){
                if (row == ""){
                    row = row + String(board[i - 1][j])
                }
                else {
                    row = row + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + String(board[i - 1][j])
                }
            }
            document.getElementById("row " + String(i)).innerHTML = row
        }
    }
}

function inputIsInvalid(){
    // starting board is invalid or puzzle is insolvable
    for (i = 1; i <= 9; i++){
        document.getElementById("row " + String(i)).innerHTML = "THE GIVEN BOARD IS INVALID"
    }
}
