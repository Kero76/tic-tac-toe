import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    //#region Actions 

    /**
     * Render a square on board.
     * 
     * @param {int} i 
     *  The number of the square on board.
     */
    renderSquare(i) {
        return <Square 
            value={this.props.squares[i]} 
            onClick={() => this.props.onClick(i)}
        />;
    }
    
    //#endregion

    //#region Render

    render() {
        return (
          <div>
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
