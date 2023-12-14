import { Box, Flex, Text } from "@radix-ui/themes";
import { pieceCodeImageMapping } from "../../chess/pieces";

const cellColorMap = {
  light: "beige",
  dark: "tan",
};

const Cell = ({ color = "light", piece, square, showRank, showFile }) => {
  const [file, rank] = square.split("");
  return (
    <Box
      width="9"
      height="9"
      style={{ backgroundColor: cellColorMap[color] }}
      position={"relative"}
    >
      {showFile && (
        <Box position={"absolute"} bottom={"0"} right={"0"}>
          <Text size={"1"} color="black">
            {file}
          </Text>
        </Box>
      )}
      {showRank && (
        <Box position={"absolute"} top={"0"} left={"0"}>
          <Text size={"1"} color="black">
            {rank}
          </Text>
        </Box>
      )}
      <Flex p={"2"} style={{ zIndex: 10 }}>
        {piece && (
          <img
            style={{ width: "100%" }}
            src={pieceCodeImageMapping[piece]}
            alt="piece"
          />
        )}
      </Flex>
    </Box>
  );
};
export default Cell;
