import { Box, Flex } from "@radix-ui/themes";
import blackBishop from "../../assets/pieces/bB.svg";

const cellColorMap = {
  light: "beige",
  dark: "tan",
};

const Cell = ({ dark }) => {
  return (
    <Box
      width="9"
      height="9"
      style={{ backgroundColor: cellColorMap[dark ? "dark" : "light"] }}
    >
      <Flex p={"2"}>
        <img style={{ width: "100%" }} src={blackBishop} alt="piece" />
      </Flex>
    </Box>
  );
};
export default Cell;
