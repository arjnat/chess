import blackBishop from "../assets/pieces/bB.svg";
import whiteBishop from "../assets/pieces/wB.svg";
import blackKnight from "../assets/pieces/bN.svg";
import whiteKnight from "../assets/pieces/wN.svg";
import blackRook from "../assets/pieces/bR.svg";
import whiteRook from "../assets/pieces/wR.svg";
import blackKing from "../assets/pieces/bK.svg";
import whiteKing from "../assets/pieces/wK.svg";
import blackQueen from "../assets/pieces/bQ.svg";
import whiteQueen from "../assets/pieces/wQ.svg";
import blackPawn from "../assets/pieces/bP.svg";
import whitePawn from "../assets/pieces/wP.svg";

export const pieceCodeImageMapping = {
  bB: blackBishop,
  wB: whiteBishop,
  bN: blackKnight,
  wN: whiteKnight,
  bR: blackRook,
  wR: whiteRook,
  bK: blackKing,
  wK: whiteKing,
  bQ: blackQueen,
  wQ: whiteQueen,
  bP: blackPawn,
  wP: whitePawn,
};

export const initialPos = [
  ["wR", "wN", "wB", "wK", "wQ", "wB", "wN", "wR"],
  ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
  ["bR", "bN", "bB", "bK", "bQ", "bB", "bN", "bR"],
];
