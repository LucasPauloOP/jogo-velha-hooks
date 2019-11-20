import React from 'react';
import Board from './Game/Board';
import {Background} from './Game/GameStyle';

class Game extends React.Component {
    render () {
        return (
            <Background >
                <div >
                    <Board />
                </div>
            </Background>
        )
    }
}

export default Game;