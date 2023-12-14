import {
  Flex,
  Text,
  Button,
  Container,
  Heading,
  Section,
} from "@radix-ui/themes";
import Chessboard from "./components/Chessboard";
import { useState } from "react";

function App() {
  const [flip, setFlip] = useState(false);

  const toggleFlip = () => {
    setFlip((prev) => !prev);
  };
  return (
    <Container size="2">
      <Flex my={"5"} gap="2" justify={"center"} align={"baseline"}>
        <Heading size="9">🌰</Heading>
        <Heading weight={"light"} size="9" color="bronze">
          ChessNut
        </Heading>
      </Flex>
      <Section mt={"5"} mb={"1"} size="2">
        <Flex
          direction={"column"}
          gap={1}
          align={"center"}
          py="9"
          style={{
            backgroundColor: "darkgray",
            borderRadius: "3px",
            overflow: "hidden",
          }}
        >
          <Chessboard flip={flip} />
        </Flex>
      </Section>
      <Flex direction="column" gap="2">
        <Button
          onClick={() => {
            toggleFlip();
          }}
        >
          Flip Board
        </Button>
      </Flex>
    </Container>
  );
}

export default App;
