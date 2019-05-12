////////// CREATION DE LA GRILLE //////////
var size = 4;
var grid = new Array(size);
let score = 0;

function createArray() {
    
    for (row=0; row < size; row++) {
        grid[row] = new Array(size)

        for(cell=0; cell < size; cell++) {
            grid[row][cell] = 0;
        }
    }
}

////////// AFFICHAGE DES VALEURS DANS LA GRILLE //////////

function DrawGrid() {

    for(row=0; row < size; row++) {
        for(cell=0; cell < size; cell++) {
            value = grid[row][cell];

            if (value === 0)
            $('div.row:eq('+row+') > div.cell:eq('+cell+')').text('');
            else
            $('div.row:eq('+row+') > div.cell:eq('+cell+')').text(value);

            switch(value){
                case 8:
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').attr('class', 'cell');
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').addClass('cell8');
                break;
                case 16:
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').attr('class', 'cell');
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').addClass('cell16');
                break;
                case 32:
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').attr('class', 'cell');
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').addClass('cell32');
                break;
                case 64:
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').attr('class', 'cell');
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').addClass('cell64');
                break;
                case 128:
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').attr('class', 'cell');
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').addClass('cell128');
                break;
                case 256:
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').attr('class', 'cell');
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').addClass('cell256');
                break;
                case 512:
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').attr('class', 'cell');
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').addClass('cell512');
                break;
                case 1024:
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').attr('class', 'cell');
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').addClass('cell1024');
                break;
                case 2048:
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').attr('class', 'cell');
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').addClass('cell2048');
                break;
                default:
                $('div.row:eq('+row+') > div.cell:eq('+cell+')').attr('class', 'cell');

            }
             
        }
    }
    updateScore();

    

}


////////// RANDOM 2 OU 4 DANS LA GRILLE //////////

function Rand () {
    let i = Math.floor(Math.random() * 4);
    let j = Math.floor(Math.random() * 4);
    
    if (Math.random() > 0.9)
    var value = 4;
    else
    var value = 2;
    
    
    if (checkGrid() > 0){
        
        if (grid[i][j] === 0) {
            grid[i][j] = value;
        }
        else
        Rand();
    }
    else
    $('.container').before("You have Lost !!!");
        
}

////////// CHECK DU TABLEAU //////////

function checkGrid(){
    var bool = 0;
    for(row=0; row < size; row++) {
        for(cell=0; cell < size; cell++) {
            if (grid[row][cell] === 0)
            bool++;
        }
    }
    return bool;
}

function updateScore(){
    $('.score').text('');
    $('.score').text('Score : '+score);
}


