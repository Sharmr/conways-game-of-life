export const GameMenu = (props) => {
    return (
        <div className='game-menu'>
            <button 
                className='game-menu-button'
                id='play-pause'
                onClick={props.runGame}>
                    {props.run ? 'Pause' : 'Run'}
            </button>
            <button
                className='game-menu-button'
                id='clear'
                onClick={props.clearBoard}>
                    Clear
            </button>
            <button
                className='game-menu-button'
                id='progress'
                onClick={!props.run ? props.progressOneStep: ()=>{}}>
                    Progress One Step
            </button>
        </div>)
};