import React, { FC } from "react";
import { Cell } from "../models";

interface IProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const notationAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const CellComponent: FC<IProps> = ({ cell, selected, click }) => {
  return (
    <div
      className={["cell", cell.color, selected && "selected"].join(" ")}
      onClick={() => click(cell)}
      style={{ background: cell.available && cell.figure ? "green" : "" }}
    >
      {cell.x === 0 && (
        <div className={["numeric", "notation", cell.color].join(" ")}>
          {cell.y + 1}
        </div>
      )}
      {cell.y === 7 && (
        <div className={["alpha", "notation", cell.color].join(" ")}>
          {notationAlphabet[cell.x]}
        </div>
      )}
      {cell.available && !cell.figure && <div className="available" />}
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt={cell.figure.name} />
      )}
    </div>
  );
};
