export const initializeModel = (NUM_BOXES, CELL_SIZE) => {
    let model = [];
    console.log(NUM_BOXES);
    for(let i = 0; i < NUM_BOXES; i++) {
        model.push({
            id: i,
            on: false,
            size: CELL_SIZE,
        });
    }
    return model
};