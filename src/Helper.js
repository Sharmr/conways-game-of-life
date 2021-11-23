export const initializeModel = (NUM_BOXES, CELL_SIZE) => {
    let model = [];
    for(let i = 0; i < NUM_BOXES; i++) {
        model.push({
            id: i,
            on: false,
            size: CELL_SIZE,
        });
    }
    return model
};


export const getNextModel = old_model => {
    const id=7
    return old_model.map((cell) => {
        return id === cell.id ? {...cell, on: !cell.on} : cell;
    });
};

