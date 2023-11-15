import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024px
      }}
    >
      <GridItem area="nav" bg="red">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="blue">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="Green">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
