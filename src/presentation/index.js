// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const Presentation = () => (
  <Deck
    transition={['fade']}
    theme={theme}
    transitionDuration={300}
  >
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          React Hooks: What and Why.
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} >
        Armand Adroher
      </Text>
      <Text margin="10px 0 0" textColor="tertiary" size={1} >
        Software Engineer at BBC
      </Text>
    </Slide>
    <Slide>
      <Heading>
        What?
      </Heading>
    </Slide>
    <Slide bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Typography
      </Heading>
      <Heading size={1} textColor="secondary">
        Heading 1
      </Heading>
      <Heading size={2} textColor="secondary">
        Heading 2
      </Heading>
      <Heading size={3} textColor="secondary">
        Heading 3
      </Heading>
      <Heading size={4} textColor="secondary">
        Heading 4
      </Heading>
      <Heading size={5} textColor="secondary">
        Heading 5
      </Heading>
      <Text size={6} textColor="secondary">
        Standard text
      </Text>
    </Slide>
    <Slide bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        Standard List
      </Heading>
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
      </List>
    </Slide>
    <Slide bgColor="secondary" textColor="primary">
      <BlockQuote>
        <Quote>Example Quote</Quote>
        <Cite>Author</Cite>
      </BlockQuote>
    </Slide>
  </Deck>
);

export default Presentation;