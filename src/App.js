import React from 'react';
import * as Helper from './Helper'
import { GameWindow } from './components/GameWindow';
import { GameMenu } from './components/GameMenu';

export const App = () => {

    const dimension = 50;
    const cell_size = 12;
    const [model, updateModel] = React.useState(Helper.initializeModel(dimension*dimension, cell_size));
    const [run, toggleRun] = React.useState(false);

    const handleClick = (id) => {
        updateModel((prevModel) => {
            return prevModel.map((cell) => {
                return id === cell.id ? {...cell, on: !cell.on} : cell;
            });
        });
    };

    const runGame = () => {
        toggleRun(prev_run => !prev_run);
    };

    const clearBoard = () => {
        updateModel(Helper.initializeModel(dimension*dimension, cell_size));
    };
    
    const progressOneStep = () => {
        const new_model = Helper.getNextModel(model);
        updateModel(new_model);
    }

    if(run) {
        setTimeout(progressOneStep, 1000);
    }

    return (<>
                <h1>Something</h1>
                <div className="main-game">
                    <GameWindow 
                        model={model}
                        dimension={dimension}
                        handleClick={handleClick}
                        />
                    <GameMenu 
                        run={run}
                        runGame={runGame}
                        clearBoard={clearBoard}
                        progressOneStep={progressOneStep}/>
                </div>
            </>)
};