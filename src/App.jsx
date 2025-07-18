import React, { useState } from "react";

const initialBoard = Array(9).fill(null);

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
  for (let [a, b, c] of lines) {
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}

function Square({ value, onClick }) {
  return (
    <button
      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white border-2 border-gray-300 text-3xl sm:text-4xl md:text-5xl font-bold flex items-center justify-center hover:bg-gray-100 transition"
      onClick={onClick}
      aria-label={value ? `Square with ${value}` : "Empty square"}
    >
      {value}
    </button>
  );
}

function Board({ squares, onSquareClick }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {squares.map((value, idx) => (
        <Square key={idx} value={value} onClick={() => onSquareClick(idx)} />
      ))}
    </div>
  );
}

export default function App() {
  const [squares, setSquares] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(Boolean);

  function handleSquareClick(idx) {
    if (squares[idx] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[idx] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleRestart() {
    setSquares(initialBoard);
    setXIsNext(true);
  }

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "Draw!";
  } else {
    status = `Next: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center w-full max-w-xs sm:max-w-sm">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
          Tic Tac Toe
        </h1>
        <Board squares={squares} onSquareClick={handleSquareClick} />
        <div className="mt-4 text-lg sm:text-xl font-semibold text-gray-700">
          {status}
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition font-medium"
          onClick={handleRestart}
        >
          Restart
        </button>
      </div>
      <footer className="mt-6 text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Tic Tac Toe Game
      </footer>
    </div>
  );
}