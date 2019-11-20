import React,{useState} from 'react';
import calculateWinner from './Board/calculateWinner';
import Square from './Board/renderSquare/Square';
import isBoardFull from './Board/isBoardFull';
import Restart from './Board/Restart';
import {StatusGame} from './Board/BoardStyle';

const Board = () => {

    const [squares,setSquare] = useState(Array(9).fill(null));
    const [xIsNext,setxIsNext] = useState(true);

    function renderRestartButton(){
        return(
                <Restart  
                onClick={() => {
                setSquare(Array(9).fill(null));
                setxIsNext(true);
            }} 
            />
        );
    }

    function renderSquare(i) {
        return <Square
          mark={squares[i]}
          onClick={() => {
              
              if(squares[i] != null || winner != null)
                    return;

              const nextSquares = squares.slice();
              nextSquares[i] = xIsNext ? "X" : "O";

            setSquare(nextSquares);
            setxIsNext(!xIsNext);
          }}
        />;
      }

        const winner = calculateWinner(squares);

        let status;
        if(winner){
            status = 'Winner: ' + winner;
            console.log(status);
        }else if(isBoardFull(squares)){
            status = "Draw";
        }
        else{
            status = 'Next player: ' + (xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <StatusGame WinLoseorDraw={status} >{status}</StatusGame>
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>

                <div className="restart-button">
                    {renderRestartButton()}
                </div>
            </div>
            
        );
    
}

export default Board;