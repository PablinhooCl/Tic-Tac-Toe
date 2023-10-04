//      GAME BOARD
let gameBoard= [],
playerId= 'x',
cpuId= 'o',
gameResult='',
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
                if(gameResult== ''){
                gameResult= 'Draw'
                }else if(gameResult== 'Winner'){}
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
                || (gameBoard[6].innerText == 'o' && gameBoard[6].innerText === gameBoard[7].innerText && gameBoard[7].innerText === gameBoard[8].innerText)) { // ROW 3
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
        
        const winConditioner  =() => {
            if(gameResult== 'Winner'){
                if(winner== 'x'){
                    const _overlay= document.getElementById('overlay');
                    const _wDisplay= document.getElementById('winDisplay');
                    _overlay.classList.add('actived');
                    _wDisplay.classList.add('actived');
                    _overlay.onclick= function (){ displayController.gameResetter()};
                    _wDisplay.onclick= function (){ displayController.gameResetter()};
                    _wDisplay.innerHTML= "X wins"
                }
                else if(winner== 'o'){
                    const _overlay= document.getElementById('overlay');
                    const _wDisplay= document.getElementById('winDisplay');
                    _overlay.classList.add('actived');
                    _wDisplay.classList.add('actived');
                    _overlay.onclick= function (){ displayController.gameResetter()};
                    _wDisplay.onclick= function (){ displayController.gameResetter()};
                    _wDisplay.innerHTML= "o wins"
                }
            }else if(gameResult== 'Draw'){
                const _overlay= document.getElementById('overlay');
                const _wDisplay= document.getElementById('winDisplay');
                _overlay.classList.add('actived');
                _wDisplay.classList.add('actived');
                _overlay.onclick= function (){ displayController.gameResetter()};
                _wDisplay.onclick= function (){ displayController.gameResetter()};
                _wDisplay.innerHTML= "It's a draw"
            }else if(gameResult== ''){}
        };
        const gameResetter= () =>{
            const _overlay= document.getElementById('overlay');
            const _wDisplay= document.getElementById('winDisplay');
            gameResult='';
            for (let i=0; i<gameBoard.length; i++){
                const divElement = gameBoard[i];
            while (divElement.firstChild) {
                divElement.removeChild(divElement.firstChild);
            }};
            _overlay.classList.remove('actived');
            _wDisplay.classList.remove('actived');


        };
        const buttonSelecter =() =>{
            if(playerId== 'x'){
                const xButton= document.getElementById('x');
                const oButton= document.getElementById('o');
                xButton.classList.add ('actived');
                oButton.classList.remove ('actived');
            
            }else if(playerId== 'o'){
                const xButton= document.getElementById('x');
                const oButton= document.getElementById('o');
                oButton.classList.add ('actived');
                xButton.classList.remove ('actived');
            
            }}

        return{
            playerSelect,
            gameChecker,
            drawChecker,
            winConditioner,
            gameResetter,
            buttonSelecter
        }
    

})();

const xSelector= document.getElementById('x');
const oSelector= document.getElementById('o');

xSelector.onclick= function(){displayController.playerSelect('x'),
                                displayController.buttonSelecter(),
                                displayController.gameResetter()};

oSelector.onclick= function(){displayController.playerSelect('o'),
                              displayController.buttonSelecter(),
                              displayController.gameResetter()};

// se crea un elemnto p con el playerId ;   se actualiza el array solo?SIM

const gameOn= (x) =>{
    const divSelector = () => document.getElementById(x);
    const pAdder= () => {
        newP= document.createElement('p');
        newP.innerHTML= playerId;
        if( divSelector().hasChildNodes()== true){
          console.log(divSelector(), divSelector().hasChildNodes())
        }
        else{divSelector().append(newP);
            displayController.winConditioner(),
            displayController.gameChecker(),
            displayController.drawChecker()};
    };
    return {
        pAdder,
        divSelector
    };

};

//      AI PLAYER
// const aiPlayer= ()=>{
//     let emptyBoard= [];
//     const emptyBoardChecker =() =>{
//         for(let i= 0; i< gameBoard; i++){
//             if(gameBoard[i].hasChildNodes()== true){
//                 emptyBoard.push(gameBoard[i]);
//             }else{} } }
//     const aiPlay= ()=>{
//         emptyBoardChecker();

//         let _board=Math.random()* emptyBoard.length;
//         newP= document.createElement('p');
//         newP.innerHTML= cpuId;
//         if( emptyBoard[_random].hasChildNodes()== true){
//           console.log(emptyBoard[_random])
//         }
//         else{emptyBoard[_random].append(newP);};
//     };
//     return{
//         emptyBoardChecker,
//         aiPlay
//     }  
        
    
        
    
//     }

    const aiPlayer = () => {
        let emptyBoard = []; // Declarar un array vacío para almacenar elementos vacíos
        
        const emptyBoardChecker = () => {
            emptyBoard = [];
            for (let i = 0; i < gameBoard.length; i++) {
                if (!gameBoard[i].hasChildNodes()) { // Verificar si el elemento no tiene hijos
                    emptyBoard.push(gameBoard[i]);
                }
            }
            console.log('1'+emptyBoard.length)
        };
        
        const aiPlay = () => {
            emptyBoardChecker();
            console.log('2'+emptyBoard.length);
            if(gameResult== ''){
                if (emptyBoard.length > 0) { // Asegurarse de que haya elementos en emptyBoard
                    const randomIndex = Math.floor(Math.random() * emptyBoard.length); // Generar un índice aleatorio
                    const randomElement = emptyBoard[randomIndex]; // Obtener un elemento aleatorio del array
                    const newP = document.createElement('p');
                    newP.innerHTML = cpuId;
                    randomElement.appendChild(newP); // Agregar el elemento <p> al elemento vacío seleccionado
                    displayController.winConditioner(),
                    displayController.gameChecker(),
                    displayController.drawChecker();
                    if(gameResult== ''){}
                    else if(gameResult== 'Winner'){displayController.winConditioner(),
                        displayController.gameChecker(),
                        displayController.drawChecker()}
                    else if(gameResult== 'Draw'){displayController.winConditioner(),
                        displayController.gameChecker(),
                        displayController.drawChecker()}
                } else {
                    console.log('No hay casillas vacías en el tablero.');
            }}else {displayController.winConditioner()}
        };
        
        return {
            emptyBoardChecker,
            aiPlay
        };
    };




function pOnClicker(x){
    let iDiv= gameOn(x);
    iDiv.pAdder();
};
const ai= aiPlayer();
for(let i= 1; i< 10; i++){ //AGREGA LAS FUNCIONES NECESARIAS AL TABLERO
    let iSelector= document.getElementById(i);
    iSelector.onclick= function (){
        pOnClicker(i),
        ai.aiPlay()
        
    };
    };
function uno(){
for (let i=0; i<gameBoard.length; i++){
    console.log(gameBoard[i]);
}}

