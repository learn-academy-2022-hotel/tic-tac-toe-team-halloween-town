import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [counter, setCounter] = useState(0)
  const winner = calculateWinner(squares)
  const [xIsNext, setXisNext] = useState(true)
  

  const handleGamePlay = (clickedSquare, index) => {
    let updateBoard = [...squares]
    if (winner || updateBoard[index]) 
    return updateBoard[index] = xIsNext ? "X":"O"
    setSquares(updateBoard)
    setXisNext(!xIsNext)
    if(squares[clickedSquare] !== null){
      return
    }
   if (counter % 2 === 0){
     let updateBoard = [...squares]
      updateBoard[clickedSquare] = "❌"
      setSquares(updateBoard)
    } else{
      let updateBoard = [...squares]
      updateBoard[clickedSquare] = "⭕️"
      setSquares(updateBoard)
    }
    let newCounter = counter + 1
    setCounter(newCounter)
  } 
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
      else if (squares.includes(lines)){
        return alert("You Won")
      }
    }
    return null
    }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {squares.map((square, index)=> {
        return(
          <Square
            square={square}
            index={index}
            handleGamePlay={handleGamePlay}
            calculateWinner={calculateWinner}
            winner={winner}
           
            />
        )
      })}
      </div>
    </>
  )
}

export default App