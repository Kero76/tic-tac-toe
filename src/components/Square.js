import React from 'react';

/**
 * Function component which represent the a square in game.
 * 
 * @param {any} props 
 *  The properties of the square.
 */
function Square(props) {
    return (
        <button
            className="square" 
            onClick={() => props.onClick()}
        >
            {props.value}
        </button>
    );
}

export default Square;
