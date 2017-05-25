import React, { Component } from 'react';

// import {
//   Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
//   Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
// } from 'spectacle';

import { Deck, Slide, Text } from 'spectacle';

import { theme } from "../common/darkTheme.js";

export default class ReactRedux extends Component {
  render() {
    return (
      <Deck theme={theme} transition="slide" progress="pacman">
        <Slide id="slide1">
          <Text>ReactRedux 1</Text>
        </Slide>
        <Slide id="slide2">
          <Text>ReactRedux 2</Text>
        </Slide>
        <Slide id="slide3">
          <Text>ReactRedux 3</Text>
        </Slide>
        <Slide id="slide4">
          <Text>ReactRedux 4</Text>
        </Slide>
      </Deck>
    );
  }
}