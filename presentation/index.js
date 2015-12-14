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
  ab1: require("../assets/ab1.svg"),
  ab2: require("../assets/ab2.svg"),
  ab3: require("../assets/ab3.svg"),
  ab4: require("../assets/ab4.svg"),
  tree1: require("../assets/tree1.svg"),
  tree2: require("../assets/tree2.svg"),
  tree3: require("../assets/tree3.svg"),
  tree4: require("../assets/tree4.svg"),
  pvsplit: require("../assets/pvsplit.svg"),
  ybwc: require("../assets/ybwc.svg"),
};

preloader(images);

const movelist = require("../assets/moves2");

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary" bgImage={images.ybwc} bgDarken="0.7">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              MINIMAX
            </Heading>
            <Heading size={1} fit caps textColor="white">
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

          <Slide transition={["fade"]}>
            <Image width="100%" src={images.tree1} />
          </Slide>
          <Slide transition={["fade"]} transitionDuration={0}>
            <Image width="100%" src={images.tree2} />
          </Slide>
          <Slide transition={["fade"]} transitionDuration={0}>
            <Image width="100%" src={images.tree3} />
          </Slide>
          <Slide transition={["fade"]} transitionDuration={0}>
            <Image width="100%" src={images.tree4} />
          </Slide>

          <Slide transition={["zoom"]}>
            <TwoThousandFortyEight keyboard={true} />
          </Slide>
          <Slide transition={["zoom"]}>
            <TwoThousandFortyEight keyboard={false} movelist={movelist} />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1}>
              Alpha Beta pruning
            </Heading>
          </Slide>
          <Slide transition={["fade"]}>
            <Image width="100%" src={images.ab1} />
          </Slide>
          <Slide transition={["fade"]} transitionDuration={0}>
            <Image width="100%" src={images.ab2} />
          </Slide>
          <Slide transition={["fade"]} transitionDuration={0}>
            <Image width="100%" src={images.ab3} />
          </Slide>
          <Slide transition={["fade"]} transitionDuration={0}>
            <Image width="100%" src={images.ab4} />
          </Slide>

          <Slide transition={["zoom"]}>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Parallellization
            </Heading>
            <List>
              <Appear><ListItem>Two difficulties:</ListItem></Appear>
              <Appear><ListItem><Latex data="\alpha \beta"/> pruning is sequential</ListItem></Appear>
              <Appear><ListItem>Load balancing</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["fade"]}>
            <Heading caps textColor="black">PVSplit</Heading>
            <Image width="100%" src={images.pvsplit} />
          </Slide>

          <Slide transition={["zoom"]}>
            <Heading caps textColor="black">PVSplit</Heading>
            <List>
              <ListItem>17 moves per board</ListItem>
              <ListItem>Perfectly ordered</ListItem>
              <ListItem>Depth 12</ListItem>
              <ListItem><Latex data="17^{12} = 582\ 622\ 237\ 229\ 761" /></ListItem>
            </List>
            
            <Appear>
            <table width="100%" style={{textAlign: "left"}}>
              <thead>
                <tr>
                  <th># Cores</th>
                  <th># Leafs discovered</th>
                  <th>Time (s)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>25 557 425</td>
                  <td>0.574654</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>12 778 713</td>
                  <td>0.281451</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>6 389 357</td>
                  <td>0.142841</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>3 194 679</td>
                  <td>0.0708847</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>1 597 340</td>
                  <td>0.0357583</td>
                </tr>
              </tbody>
            </table>
            </Appear>
          </Slide>

          <Slide transition={["fade"]} transitionDuration={0}>
            <Heading caps fit textColor="black">Younger Brother Wait Concept</Heading>
            <Image width="100%" src={images.ybwc} />
          </Slide>

          <Slide transition={["fade"]} transitionDuration={0}>
            <Heading caps fit textColor="black">Load Balancing</Heading>
            <List>
              <Appear><ListItem>Game trees are highly unstructured</ListItem></Appear>
              <Appear><ListItem>Each processor <Latex data="p" /> has a work queue <Latex data="Q_p" /></ListItem></Appear>
              <Appear><ListItem>Synchronize after <Latex data="n" /> nodes</ListItem></Appear>
              <Appear><ListItem>Put <Latex data="done_p" /> and <Latex data="|Q_p|" /> in <Latex data="P(*)" /></ListItem></Appear>
              <Appear><ListItem>Cyclically distribute work over idle processors</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="secondary">
            <Heading caps fit textColor="white">In conclusion</Heading>
            <Appear><Heading caps fit>Thanks for your attention :)</Heading></Appear>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
