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
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#a3f792"
});

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
          <Slide transition={["spin"]} bgColor="white">
            <TwoThousandFortyEight />
          </Slide>
          <Slide transition={["fade"]}>
            <Heading size={2} fit caps>
              Pretty cool stuff
            </Heading>
            <LatexBlock data="1 + \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots" />
            <Latex data="1 + \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots" />
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
