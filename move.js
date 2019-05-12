////////// DEPLACEMENT A DROITE //////////
function moveRight(){
    for(row=0; row < size; row++){
        for(cell=size-2 ; cell >= 0; cell--){

            if (grid[row][cell] !== 0){
                var j = cell;
                while(j+1 < size){
                    if(grid[row][j+1] === 0){
                        grid[row][j+1] = grid[row][j];
                        grid[row][j] = 0;
                        j++;
                    }
                    else if (grid[row][j] ===  grid[row][j+1]){
                        grid[row][j+1] *= 2;
                        score += grid[row][j+1];
                        grid[row][j] = 0;
                        break;
                    }
                    else break;
                }
            }
        }
    }

    Rand();
    DrawGrid();
}

////////// DEPLACEMENT A GAUCHE //////////
function moveLeft(){
    for(row=0; row < size; row++){
        for(cell=1; cell < size; cell++){

            if (grid[row][cell] !== 0){
                var j = cell;
                while(j-1 < size){
                    if(grid[row][j-1] === 0){
                        grid[row][j-1] = grid[row][j];
                        grid[row][j] = 0;
                        j--;
                    }
                    else if (grid[row][j] ===  grid[row][j-1]){
                        grid[row][j-1] *= 2;
                        score += grid[row][j-1];
                        grid[row][j] = 0;
                        break;
                    }
                    else break;
                }
            }
        }
    }

    Rand();
    DrawGrid();
    
}

////////// DEPLACEMENT EN HAUT //////////
function moveUp(){
    for(cell=0; cell < size; cell++){
        for(row=1; row < size; row++){

            if (grid[row][cell] !== 0){
                var i = row;
                while(i > 0){
                    if(grid[i-1][cell] === 0){
                        grid[i-1][cell] = grid[i][cell];
                        grid[i][cell] = 0;
                        i--;
                    }
                    else if (grid[i][cell] ===  grid[i-1][cell]){
                        grid[i-1][cell] *= 2;
                        score += grid[i-1][cell];
                        grid[i][cell] = 0;
                        break;
                    }
                    else break;
                }
            }
        }
    }

    Rand();
    DrawGrid();
}

////////// DEPLACEMENT EN BAS //////////
function moveDown(){
    for(cell=0; cell < size; cell++){
        for(row=size-2; row >=0; row--){

            if (grid[row][cell] !== 0){
                var i = row;
                while(i+1 < size){
                    if(grid[i+1][cell] === 0){
                        grid[i+1][cell] = grid[i][cell];
                        grid[i][cell] = 0;
                        i++;
                    }
                    else if (grid[i][cell] ===  grid[i+1][cell]){
                        grid[i+1][cell] *= 2;
                        score += grid[i+1][cell];
                        grid[i][cell] = 0;
                        break;
                    }
                    else break;
                }
            }
        }
    }

    Rand();
    DrawGrid();
}