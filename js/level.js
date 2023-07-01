
var gameState = localStorage.getItem("gameState") ? JSON.parse(localStorage.getItem("gameState")) : {
    level: "rookie"
}


function handlegameSelection(){
    var games = document.getElementsByClassName("game")
    for(let i = 0; i < games.length; i++){
        const game = games[i]
        game.addEventListener("click", ()=>{
            const gameId = game.getAttribute("id")
            switch(gameId){
                case "game1":
                    gameState = {
                        ...gameState,
                        level: "rookie"
                    }
                    break;
                case "game2":
                    gameState = {
                        ...gameState,
                        level: "expert"
                    }
                    break;
                case "game3":
                    gameState = {
                        ...gameState,
                        level: "legend"
                    }
                    break;
                default:
                    console.log("game not found")
            }
            localStorage.setItem("gameState", JSON.stringify(gameState)); 
            window.location.href = "/game.html"
        })
    }
}

handlegameSelection()