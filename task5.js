// task 5

// function stringifyBoard(round, board){
//     console.group(`Score after round ${round}`);
//     console.log(" ");
//     console.log(' ' + (board["1"] || '1 ') + " | " + (board["2"] || ' 2 ') + " | " + (board["3"] || ' 3 '));
//     console.log("---------------");
//     console.log(' ' + (board["4"] || '4 ') + " | " + (board["5"] || ' 5 ') + " | " + (board["6"] || ' 6 '));
//     console.log("---------------");
//     console.log(' ' + (board["7"] || '7 ') + " | " + (board["8"] || ' 8 ') + " | " + (board["9"] || ' 9 '));
//     console.log(" ");
//     console.groupEnd();
// };

// function solutions(board) {

//         if (board["1"] && (board["1"] == board["2"] && board["1"] == board["3"])) {
//             return true
//         }
//         if (board["4"] && (board["4"] == board["5"] && board["4"] == board["6"])) {
//             return true
//         }
//         if (board["7"] && (board["7"] == board["8"] && board["7"] == board["9"])) {
//             return true
//         }
//         if (board["9"] && (board["9"] == board["6"] && board["9"] == board["3"])) {
//             return true
//         }
//         if (board["8"] && (board["8"] == board["5"] && board["8"] == board["2"])) {
//             return true
//         }
//         if (board["7"] && (board["7"] == board["4"] && board["7"] == board["1"])) {
//             return true
//         }
//         if (board["7"] && (board["7"] == board["5"] && board["7"] == board["3"])) {
//             return true
//         }
//         if (board["9"] && (board["9"] == board["5"] && board["9"] == board["1"])) {
//             return true
//         };
//         return false;
// };

// function move(board, playerSymbol, opponentSymbol){
//     let testBoard;
//     const player = [playerSymbol, opponentSymbol];
//     for (let p = 0 ; p < 2; p++){
//         for (let i = 1 ; i < 10; i++){
//             if(board[i.toString()] !== null){
//                 continue;
//             }
//             testBoard = Object.assign({}, board);
//             testBoard[i.toString()] = player[p];
//             if(solutions(testBoard)){
//                 return i.toString();
//             }
//         }
//     }

// }

// let data = {
//     player1:{
//         title: "Player 1",
//         name: "X"
//     },
//     player2:{
//         title: "Player 2",
//         name: "0"
//     }
// };
// console.log("Type `typeStart()` to start the game");
// function typeStart(config){
//     config = Object.assign(data, config || {});
//     let gameOn = true;
//     let player1Move, round, computer, board, ask, currentPlayer, opponentPlayer;

//     console.log(`${config.player1.title}: ${config.player1.name}`);
//     console.log(`${config.player2.title}: ${config.player2.name}`);

//     while (gameOn === true){
//         round = 0
//         player1Move = true
//         board = {
//             "1": null,
//             "2": null,
//             "3": null,
//             "4": null,
//             "5": null,
//             "6": null,
//             "7": null,
//             "8": null,
//             "9": null
//         };

//         stringifyBoard(round++, board);
//         for (let i = 0 ; i < 9; i++){
//             if (solutions(board)){
//                 console.log(`${currentPlayer.title} ${currentPlayer.name} wins!`);
//                 alert(`${currentPlayer.title} ${currentPlayer.name} wins!`);
//                 gameOn = false;
//                 break;
//              }

//             currentPlayer = config.player1;
//             opponentPlayer = config.player2;
//             if(!player1Move)
//                 currentPlayer = config.player2;
//                 opponentPlayer = config.player1;

//             ask = undefined;
//             while(board[ask] !== null || ask === undefined){
//                 if(player1Move === false && computer === true){
//                     ask = move(board, currentPlayer.name, opponentPlayer.name);
//                 }else{
//                     ask = prompt(`${currentPlayer.title} (${currentPlayer.name}) where would you like to go (1-9)? (type "exit" to leave)`);
//                     if(ask == 'exit') {
//                         gameOn = false;
//                         break;
//                     }
//                 }
//             }
//             if(gameOn == false) {
//                 break;
//             }

//             board[ask] = currentPlayer.name;
//             player1Move = !player1Move;
//             stringifyBoard(round++, board);
//         }
//         if(gameOn === true) {
//             console.log("The board is full, nobody won");
//             alert("The board is full, nobody won");
//             gameOn = false;
//         }

//         if(ask !== 'exit'){
//             gameOn = true;
//         }
//     }
// }


