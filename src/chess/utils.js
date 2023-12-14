const getFileCodeFromColIndex = (index) => {
  const startAsciiValue = 97; // lowercase a

  return String.fromCharCode(index + startAsciiValue);
};

// returns the absolute index of from char
// a -> 0
// h -> 7
export const getColIndexFromFile = (file) => {
  const charRepresentationOfFile = file.toLowerCase(); // convert to lowercase just in case
  const asciiValue = charRepresentationOfFile.charCodeAt(0);

  return asciiValue - 97;
};

export const getRowIndexFromRank = (rank) => {
  return Number(rank) - 1;
};

export const getIndicesFromSquareNotation = (squareKey) => {
  const [file, rank] = squareKey.split("");
  return [getRowIndexFromRank(rank), getColIndexFromFile(file)];
};

const ROWS = 8,
  COLS = 8;

export const emptyBoard = Array(ROWS)
  .fill()
  .map((row, rowIndex) =>
    Array(COLS)
      .fill()
      .map((item, colIndex) => {
        return {
          square: `${getFileCodeFromColIndex(colIndex)}${rowIndex + 1}`,
          piece: "",
          color: (rowIndex + colIndex) % 2 === 0 ? "dark" : "light",
        };
      })
  );

export const updateValueIn2D = (array, rowIndex, colIndex, newValue) => {
  return array.map((row, i) => {
    if (i === rowIndex) {
      return row.map((val, j) => (j === colIndex ? newValue : val));
    }
    return row.slice(); // return a copy of the row if not the target row
  });
};
