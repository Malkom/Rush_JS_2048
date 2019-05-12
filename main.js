$(function () {

    newGame();
    
    $('button.newGame').click(function () { 
        newGame();
    });

    ////////// GESTION DES DEPLACEMENTS //////////

    $(document).keydown(function (event) {

    //console.log(event);
    // UP = 38
    // DOWN = 40
    // RIGHT = 39
    // LEFT = 37

    ////////// DEPLACEMENT A DROITE (FLECHE DROITE ID = 39 ) //////////
    if (event.which == 37){ 
        moveLeft();
    }

    if (event.which == 38){ 
        moveUp();
    }

    if (event.which == 39){ 
        moveRight();
    }

    if (event.which == 40){ 
        moveDown();
    }

})
    function newGame(){
        score = 0;
        createArray();
        DrawGrid();
        Rand();
        Rand();
        DrawGrid();
        

    }

})