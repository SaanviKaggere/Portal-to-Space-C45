class Game {
    constructor() {
        
    }
    update(gRef){
        database.ref("/").update({
            gameState:gRef
        });


    }

    start() {
        player = new Players()
        player.getCount()
        form = new Form()  
        form.handlePlayerElements()
        boy = createSprite(width/2-50, height-100)
        boy.addImage("boy1", boyImg);
        boy.scale = 0.3
        girl = createSprite(width/2+100, height-100)
        girl.addImage("girl1", girlImg);
        girl.scale = 0.2
        humans = [boy, girl]
    }

    getState(){
        var gsRef = database.ref("gameState");
        gsRef.on("value", function(data){
            gameState = data.val()

        })
    }

    play(){
        this.handleElements()
        Players.getPlayersInfo()
        if(allPlayers !== undefined){
            image(spacePortal, 0, -height*5, width, height*6)
            drawSprites()
        }
    }
    
    handleElements(){
        form.hide();
    }
}