import React from 'react';
import * as Helper from './Helper'
import { GameWindow } from './components/GameWindow';

export const App = () => {

    const dimension = 50;
    const [model, updateModel] = React.useState(Helper.initializeModel(dimension*dimension, 12));

    const handleClick = (id) => {
        updateModel((prevModel) => {
            return prevModel.map((cell) => {
                return id === cell.id ? {...cell, on: !cell.on} : cell;
            });
        });
    };
    console.log(model.length)

    return (<>
                <h1>Something</h1>
                <GameWindow 
                    model={model}
                    dimension={dimension}
                    handleClick={handleClick}
                    />
            </>)
};