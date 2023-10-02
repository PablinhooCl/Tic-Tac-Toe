//      GAME BOARD
gameBoard= [];
playerId= 'x';
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
            playerId= 'x';
        }else if( select== 'o'){
            playerId= 'o';
        };}
    
    

        return{
            playerSelect
        }
    

})();

const xSelector= document.getElementById('x');
const oSelector= document.getElementById('o');

xSelector.onclick= function(){displayController.playerSelect('x')};
oSelector.onclick= function(){displayController.playerSelect('o')};

// se crea un elemnto p con el playerId ;   se actualiza el array solo?

const gameOn= (x) =>{
    const divSelector = () => document.getElementById(x);
    const pAdder= () => {
        newP= document.createElement('p');
        newP.innerHTML= playerId;
        divSelector().append(newP);
    };
    return {
        pAdder,
        divSelector
    };

};

function pOnClicker(x){
    let iDiv= gameOn(x);
    iDiv.pAdder();
}
for(let i= 1; i< 10; i++){
    let iSelector= document.getElementById(i);
    iSelector.onclick= function (){pOnClicker(i)};
    }