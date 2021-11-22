import { Cell } from "./Cell";



export const GameWindow = (props) => {

    const style = {
        gridTemplateRows: `repeat(${props.dimension}, ${props.model[0].size}px)`,
        gridTemplateColumns: `repeat(${props.dimension}, ${props.model[0].size}px)`,
    };

    let cells = [];
    for(let i=0; i < props.model.length; i++) {
        cells.push(<Cell 
                        key={i}
                        id={props.model[i].id}
                        on={props.model[i].on}
                        side_length={props.model[i].size}
                        handleClick={props.handleClick}
                        />)
    }
    return (<div className="game-window" style={style}>
                {cells}
            </div>)
};