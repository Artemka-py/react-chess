import { Figure, FigureNames } from "./Figure";
import { Cell, Colors } from "../index";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (super.canMove(target)) return false;

    // if (this.cell.isEmptyVertical(target)) return true;
    // if (this.cell.isEmptyHorizontal(target)) return true;
    // if (this.cell.isEmptyDiagonal(target)) return true;

    return false;
  }
}
