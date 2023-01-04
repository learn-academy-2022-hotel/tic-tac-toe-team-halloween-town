import React from 'react'

const Square = ({square, index, handleGamePlay, winner, xIsNext}) => {
  const handleClick = () => {
    handleGamePlay(index)
  }
  return (
    <>
    <div 
    className="square" 
    onClick={handleClick}>
      {square}
      </div>
    </>
  )
}
export default Square
