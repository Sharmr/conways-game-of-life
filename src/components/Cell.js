export const Cell = (props) => {
    const style={
        backgroundColor: props.on ? '#222222' : "transparent",
        width: props.side_length,
        height: props.side_length,
    }
    return (
        <div 
            className='cell'
            style={style}
            id={props.id}
            onClick={() => {props.handleClick(props.id)}}>
        </div>)
};