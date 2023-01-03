import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleGamePlay = (clickedSquare) => {
    if(squares[clickedSquare] !== null){
  
     let updateBoard = [...squares]
      updateBoard[clickedSquare] = "❌"
      setSquares(updateBoard)
    } else{
      let updateBoard = [...squares]
      updateBoard[clickedSquare] = "⭕️"
      setSquares(updateBoard)
    }

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