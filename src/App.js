import Cell from "./ui/atoms/Cell";
import {
  Flex,
  Text,
  Button,
  Container,
  Heading,
  Section,
  Grid,
} from "@radix-ui/themes";

function App() {
  const cells = new Array(8).fill("+");
  return (
    <Container size="2">
      <Flex my={"5"} gap="2" justify={"center"} align={"baseline"}>
        <Heading size="9">🌰</Heading>
        <Heading weight={"light"} size="9" color="bronze">
          ChessNut
        </Heading>
      </Flex>
      <Flex direction="column" gap="2">
        <Text size="3">Welcome to ChessNut App : {cells.length})</Text>
        <Button>Let's go</Button>
      </Flex>
      <Section my={"9"} size="2">
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
          <Grid
            columns="8"
            width="auto"
            style={{ borderRadius: "3px", overflow: "hidden" }}
          >
            {cells.map((ele, i) =>
              cells.map((cell, j) => <Cell dark={(i + j) % 2} />)
            )}
          </Grid>
        </Flex>
      </Section>
    </Container>
  );
}

export default App;
