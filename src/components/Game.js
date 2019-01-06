import React, { Component } from 'react';
import Board from './Board';
import Helper from '../utils/Helper';

class Game extends Component {
    //#region Constructor

    constructor(props) {
        super(props);
        
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true,
            stepNumber: 0,
        }
    }

    //#endregion

    //#region Actions

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (Helper.computeWinner(squares))
            return;

        squares[i] = (this.state.xIsNext) ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    goToStep(stepNumber) {
        this.setState({
            stepNumber : stepNumber,
            xIsNext: (stepNumber % 2) === 0,
        });
    }

    //#endregion

    //#region Render

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const squares = current.squares.slice();
        
        const symbol = (this.state.xIsNext) ? 'X' : 'O';
        const winner = Helper.computeWinner(squares);
        const status = (winner) ? 'Winner: ' + winner : 'Next player: ' + symbol;

        console.log(history);
        const moves = history.map((step, move) => {
            const desc = move 
                ? 'Go to move #' + move 
                : 'Go to start game';

            return (
                <li key={move}>
                    <button onClick={() => this.goToStep(move)}>{desc}</button>
                </li>
            );
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares={current.squares}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{ status }</div>
                    <ol>{ moves }</ol>
                </div>
            </div>
        );
    }

    //#endregion
}

export default Game;
