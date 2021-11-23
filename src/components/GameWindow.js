import { Cell } from "./Cell";



export const GameWindow = (props) => {

    const style = {
        gridTemplateRows: `repeat(${props.dimension}, ${props.model[0][0].size}px)`,
        gridTemplateColumns: `repeat(${props.dimension}, ${props.model[0][0].size}px)`,
    };

    let cells = [];
    let count = 0;
    for(let i=0; i < props.model.length; i++) {
        for(let j=0; j<props.model[0].length; j++) {
            cells.push(<Cell 
                        key={count++}
                        on={props.model[i][j].on}
                        side_length={props.model[i][j].size}
                        x={props.model[i][j].x}
                        y={props.model[i][j].y}
                        handleClick={props.handleClick}
                        />)
        }
    }
    return (<div className="game-window" style={style}>
                {cells}
            </div>)
};