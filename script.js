//      GAME BOARD
let gameBoard= [],
playerId= 'x',
cpuId= 'o',
gameResult='',
whoWin= '',
winner;
const gameBoardAdd= (() =>{

    const arrayAdder= (x) => gameBoard.push(document.getElementById(x));
    return{
        arrayAdder
    }
})();


for(i= 1; i< 10; i++){
    gameBoardAdd.arrayAdder(i);
}


//      DISPLAY CONTROLLER
const displayController= (() =>{

    const playerSelect = (select) =>  {         //        PLAYER SELECT
        if( select== 'x'){
            playerId= 'x'; cpuId= 'o'
        }else if( select== 'o'){
            playerId= 'o'; cpuId= 'x';
        };};

        const drawChecker= () =>{
        let _drawCounter= 0;
        for (let i= 0; i< gameBoard.length; i++){
            let _checker= gameBoard[i].hasChildNodes();
            if(_checker== true){
                _drawCounter++
            }else{console.log(_drawCounter)};
            if(_drawCounter== 9){
                gameResult= 'Draw'
            }
        }
    }
    
        const gameChecker = () => {
            if ((gameBoard[0].innerText == 'x' && gameBoard[0].innerText === gameBoard[1].innerText && gameBoard[1].innerText === gameBoard[2].innerText)
                || (gameBoard[0].innerText == 'o' && gameBoard[0].innerText === gameBoard[1].innerText && gameBoard[1].innerText === gameBoard[2].innerText)) { //ROW 1
                winner = gameBoard[0].innerText;
                gameResult = 'Winner';

            } else if ((gameBoard[3].innerText == 'x' && gameBoard[3].innerText === gameBoard[4].innerText && gameBoard[4].innerText === gameBoard[5].innerText)
                || (gameBoard[3].innerText == 'o' && gameBoard[3].innerText === gameBoard[4].innerText && gameBoard[4].innerText === gameBoard[5].innerText)) { //ROW 2
                winner = gameBoard[3].innerText;
                gameResult = 'Winner';

            } else if ((gameBoard[6].innerText == 'x' && gameBoard[6].innerText === gameBoard[7].innerText && gameBoard[7].innerText === gameBoard[8].innerText)
                || (gameBoard[6].innerText == 'x' && gameBoard[6].innerText === gameBoard[7].innerText && gameBoard[7].innerText === gameBoard[8].innerText)) { // ROW 3
                winner = gameBoard[6].innerText;
                gameResult = 'Winner';

            } else if ((gameBoard[0].innerText == 'x' && gameBoard[0].innerText === gameBoard[3].innerText && gameBoard[3].innerText === gameBoard[6].innerText)
                || (gameBoard[0].innerText == 'o' && gameBoard[0].innerText === gameBoard[3].innerText && gameBoard[3].innerText === gameBoard[6].innerText)) { //COLUMN 1
                winner = gameBoard[0].innerText;
                gameResult = 'Winner';

            } else if ((gameBoard[1].innerText == 'x' && gameBoard[1].innerText === gameBoard[4].innerText && gameBoard[4].innerText === gameBoard[7].innerText)
                || (gameBoard[1].innerText == 'o' && gameBoard[1].innerText === gameBoard[4].innerText && gameBoard[4].innerText === gameBoard[7].innerText)) { //COLUMN 2
                winner = gameBoard[1].innerText;
                gameResult = 'Winner';

            } else if ((gameBoard[2].innerText == 'x' && gameBoard[2].innerText === gameBoard[5].innerText && gameBoard[5].innerText === gameBoard[8].innerText)
                || (gameBoard[2].innerText == 'o' && gameBoard[2].innerText === gameBoard[5].innerText && gameBoard[5].innerText === gameBoard[8].innerText)) { //COLUMN 3
                winner = gameBoard[2].innerText;
                gameResult = 'Winner';

            } else if ((gameBoard[0].innerText == 'x' && gameBoard[0].innerText === gameBoard[4].innerText && gameBoard[4].innerText === gameBoard[8].innerText)
                || (gameBoard[0].innerText == 'o' && gameBoard[0].innerText === gameBoard[4].innerText && gameBoard[4].innerText === gameBoard[8].innerText)) { //DIAGONAL 1
                winner = gameBoard[0].innerText;
                gameResult = "Winner";

            } else if ((gameBoard[2].innerText =='x' && gameBoard[2].innerText === gameBoard[4].innerText && gameBoard[4].innerText === gameBoard[6].innerText)
                || (gameBoard[2].innerText =='o' && gameBoard[2].innerText === gameBoard[4].innerText && gameBoard[4].innerText === gameBoard[6].innerText)) { //DIAGONAL 2
                winner = gameBoard[2].innerText;
                gameResult = 'Winner';

            }else{
                drawChecker();
                
            };
            console.log(gameResult)
        };
        
    

        return{
            playerSelect,
            gameChecker,
            drawChecker
        }
    

})();

const xSelector= document.getElementById('x');
const oSelector= document.getElementById('o');

xSelector.onclick= function(){displayController.playerSelect('x')};
oSelector.onclick= function(){displayController.playerSelect('o')};

// se crea un elemnto p con el playerId ;   se actualiza el array solo?SIM

const gameOn= (x) =>{
    const divSelector = () => document.getElementById(x);
    const pAdder= () => {
        newP= document.createElement('p');
        newP.innerHTML= playerId;
        if( divSelector().hasChildNodes()== true){
          console.log(divSelector(), divSelector().hasChildNodes())
        }
        else{divSelector().append(newP);};
    };
    return {
        pAdder,
        divSelector
    };

};

//      AI PLAYER
const aiPlayer = () => {
    if (gameResult === '' && playerId !== cpuId) {
        
        const emptyCells = gameBoard.filter(cell => cell.innerText === '');

        
        if (emptyCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            const selectedCell = emptyCells[randomIndex];

            
            selectedCell.innerText = cpuId;

            
            playerId = cpuId;

            
            displayController.gameChecker();
            displayController.drawChecker();
        }
    }
};




function pOnClicker(x){
    let iDiv= gameOn(x);
    iDiv.pAdder();
};
for(let i= 1; i< 10; i++){ //AGREGA LAS FUNCIONES NECESARIAS AL TABLERO
    let iSelector= document.getElementById(i);
    iSelector.onclick= function (){
        pOnClicker(i),
        displayController.gameChecker(),
        displayController.drawChecker()
    };
    };
function uno(){
for (let i=0; i<gameBoard.length; i++){
    console.log(gameBoard[i]);
}}