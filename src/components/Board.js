import React, { Component } from 'react';
import Square from './Square';
import Helper from './Helper';

class Board extends Component {
    //#region Constructors

    constructor(props) {
        super(props);

        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    }

    //#endregion

    //#region Actions 

    renderSquare(i) {
        return <Square 
            value={this.state.squares[i]} 
            onClick={() => this.handleClick(i)}
        />;
    }

    handleClick(i) {
        const squares = this.state.squares.slice();

        if (Helper.computeWinner(this.state.squares) || squares[i])
            return null;

        squares[i] = (this.state.xIsNext) ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    //#endregion

    //#region Render

    render() {
        const symbol = (this.state.xIsNext) ? 'X' : 'O';
        const winner = Helper.computeWinner(this.state.squares);
        const status = (winner) ? 'Winner: ' + winner : 'Next player: ' + symbol;

        return (
          <div>
            <div className="status">{status}</div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
    }

    //#endregion
}

export default Board;
