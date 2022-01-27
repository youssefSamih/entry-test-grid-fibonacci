import React from "react"

import { Button, Title } from "components"

import {
  changeBgColor,
  checkFib,
  colorize,
  incrementArray,
  matrix,
  removeCellValues,
} from "utils/app.utils"
import "./App.css"

// ******* Constants

const GRID_SIZE = 5

// ******* Components

const App = () => {
  // ------- State

  const [mainTable, setMainTable] = React.useState(
    matrix(GRID_SIZE, GRID_SIZE, 0)
  )

  // ------- Handlers

  function resetGame() {
    setMainTable(matrix(GRID_SIZE, GRID_SIZE, 0))

    const cells = document.querySelectorAll("td")

    cells.forEach((cell) => {
      cell.className = "p-10 border cursor-pointer"
    })
  }

  function clickCell(row: number, col: number) {
    setMainTable((prev) => colorize(incrementArray(prev, row, col), row, col))
  }

  // ------- Effects

  React.useEffect(() => {
    const cells: {
      row: number
      col_start: number
      col_end: number
      setMainTable: React.Dispatch<React.SetStateAction<number[][]>>
    }[] = []

    for (let i = 0; i < mainTable.length; i++) {
      for (let j = 0; j < mainTable.length; j++) {
        if (
          checkFib({
            row: i,
            col_start: j,
            col_end: j - 4,
            table: mainTable,
          })
        ) {
          for (let k = 4; k >= 0; k--) {
            changeBgColor(i, j - k, "green")
          }

          cells.push({
            row: i,
            col_start: j,
            col_end: j - 4,
            setMainTable,
          })
        }
      }
    }

    setTimeout(() => cells.forEach(removeCellValues), 2000)
  }, [mainTable])

  // ------- Render

  return (
    <div className="py-10 main">
      {/* Header */}
      <div className="container flex flex-col justify-center items-center mx-auto w-full">
        {/* Header title */}
        <Title text="Grid game" className="m-10 font-mono text-5xl" />

        {/* Reset game button */}
        <Button
          id="reset"
          text="Reset grid"
          className="my-10 mx-5 text-3xl border"
          variant="white"
          onClick={resetGame}
        />
      </div>

      <div className="flex justify-center items-center my-14 w-full h-full">
        <table className="text-white border">
          {/* Grid layout */}
          <tbody>
            {mainTable.map((row, i) => (
              <tr key={i} className="p-3">
                {row.map((_cell, j) => (
                  <td
                    className="p-10 border cursor-pointer"
                    key={i * GRID_SIZE + j}
                    id={`cell-${i}-${j}`}
                    data-testid={`cell-${i}-${j}`}
                    onClick={() => clickCell(i, j)}
                  >
                    {mainTable[i][j]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
