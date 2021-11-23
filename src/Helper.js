export const initializeModel = (dimension, cell_size, ) => {
    let model = [];
    for(let i = 0; i < dimension; i++) {
        let m = [];
        for(let j = 0; j < dimension; j++) {
            m.push({
                x: i,
                y: j,
                on: false,
                size: cell_size,
            });
        }
        model.push(m);
    }
    return model
};

const howManyLiveNeighbors = (model, cell, d) => {
    let count = 0;
    //check N
    if(cell.x - 1 >= 0)
        if(model[cell.x-1][cell.y].on)
            count++;
    //check NE
    if(cell.x - 1  >= 0 && cell.y + 1 < d)
        if(model[cell.x-1][cell.y+1].on)
            count++;
    //check E
    if(cell.y + 1 < d)
        if(model[cell.x][cell.y+1].on)
            count++;
    //check SE
    if(cell.x + 1 < d && cell.y + 1 < d)
        if(model[cell.x+1][cell.y+1].on)
            count++;
    //check S
    if(cell.x + 1 < d)
        if(model[cell.x+1][cell.y].on)
            count++;
    //check SW
    if(cell.x + 1 < d && cell.y - 1 >= 0)
        if(model[cell.x+1][cell.y-1].on)
            count++;
    //check W
    if(cell.y - 1 >= 0)
        if(model[cell.x][cell.y-1].on)
            count++;
    //check NW
    if(cell.y - 1 >= 0 && cell.x - 1 >= 0)
        if(model[cell.x-1][cell.y-1].on)
            count++;
    return count
};

export const getNextModel = old_model => {
    // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
    // Any live cell with two or three live neighbours lives on to the next generation.
    // Any live cell with more than three live neighbours dies, as if by overpopulation.
    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    const d = old_model.length;
    let count_map = [];
    for(let i = 0; i < d; i++) {
        let temp = []
        for(let j = 0; j < d; j++) {
            temp.push(howManyLiveNeighbors(old_model, old_model[i][j], d));
        }
        count_map.push(temp);
    }
    return old_model.map(row => row.map(cell => {
        if(cell.on) {
            if (count_map[cell.x][cell.y] < 2)
                return {...cell, on: !cell.on};
            if(count_map[cell.x][cell.y] === 2 || count_map[cell.x][cell.y] === 3)
                return cell
            if(count_map[cell.x][cell.y] > 3)
                return {...cell, on: !cell.on};
        } else
            if(count_map[cell.x][cell.y] === 3)
                return {...cell, on: !cell.on};
        return cell;
    }));
};

