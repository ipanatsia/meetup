import React, { Component } from 'react';

// import {
//   Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
//   Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
// } from 'spectacle';

import { Deck, Slide, Text } from 'spectacle';

import theme from "../common/theme.js";

export default class StyledComponents extends Component {
  render() {
    return (
      <Deck transition="slide" progress="pacman">
        <Slide id="slide1">
          <Text>StyledComponents 1</Text>
        </Slide>
        <Slide id="slide2">
          <Text>StyledComponents 2</Text>
        </Slide>
        <Slide id="slide3">
          <Text>StyledComponents 3</Text>
        </Slide>
        <Slide id="slide4">
          <Text>StyledComponents 4</Text>
        </Slide>
      </Deck>
    );
  }
}
