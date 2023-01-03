import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [counter, setCounter] = useState(0)

  const handleGamePlay = (clickedSquare) => {
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
            key={index}
            />
        )
      })}
      </div>
    </>
  )
}

export default App