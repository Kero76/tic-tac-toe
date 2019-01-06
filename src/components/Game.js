import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
    //#region Render

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }

    //#endregion
}

export default Game;
