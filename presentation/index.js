// Import React
import React from "react";
import { render } from "react-dom";

import {Latex, LatexBlock} from "./Latex";
import TwoThousandFortyEight from "./game/TwoThousandFortyEight";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("../assets/open-sans-condensed.css");
require("../assets/lobster.css");
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/katex.min.css");

const theme = createTheme({});

const images = {
  minimax: require("../assets/minimax.svg"),
};

preloader(images);

const movelist = [
  {type: "add", x: 0, y: 2, value: 2},
  {type: "add", x: 1, y: 2, value: 4},
  {type: "move", direction: 2},
  {type: "add", x: 3, y: 2, value: 4},
  {type: "move", direction: 1},
  {type: "add", x: 1, y: 2, value: 2},
  {type: "move", direction: 3},
  {type: "add", x: 0, y: 0, value: 2},
  {type: "move", direction: 0},
  {type: "add", x: 1, y: 2, value: 2},
  {type: "move", direction: 1},
  {type: "add", x: 1, y: 2, value: 2},
  {type: "move", direction: 3},
];

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              MINIMAX
            </Heading>
            <Heading size={1} fit caps textColor="black">
              By Teun &amp; Harmen
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Game trees
            </Heading>
            <List>
              <Appear><ListItem>Node is a board position</ListItem></Appear>
              <Appear><ListItem>Edge is a move</ListItem></Appear>
              <Appear><ListItem>Perfect game</ListItem></Appear>
              <Appear><ListItem>Grows exponentially</ListItem></Appear>
              <Appear><ListItem>Heuristic scores</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Alpha Beta Pruning
            </Heading>
            <List>
              <Appear><ListItem>Reduces complexity</ListItem></Appear>
              <LatexBlock data="\sqrt{n}" />
            </List>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} caps lineHeight={1}>
              Game trees
            </Heading>
            <Image width="100%" src={images.minimax}/>
          </Slide>
          <Slide transition={["zoom"]}>
            <TwoThousandFortyEight keyboard={true} />
          </Slide>
          <Slide transition={["zoom"]}>
            <TwoThousandFortyEight keyboard={false} movelist={movelist} />
          </Slide>
          <Slide transition={["fade"]}>
            <Heading size={2} fit caps>
              Pretty Cool
            </Heading>
            <LatexBlock data="1 + \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots" />
            <Latex data="1 + \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots" />
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
