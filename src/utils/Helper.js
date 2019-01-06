export default class Helper {
    
    /**
     * Function use to compute the winner of the game.
     * 
     * @param {Array} squares 
     *  The current board configuration to compute the winner.
     */
    static computeWinner = (squares) => {
        const winningConfiguration = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < winningConfiguration.length; ++i) {
            const [a, b, c] = winningConfiguration[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
                return squares[a];
        }

        return null;
    }
}
