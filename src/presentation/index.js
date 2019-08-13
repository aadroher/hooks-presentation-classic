/* eslint-disable import/no-webpack-loader-syntax */
// Import React
import React from 'react';

import classExample0 from '!raw-loader!./code/class-example-0.js'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  S
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

console.log({classExample0})

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
    contentWidth={800}
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
      <Heading size={4} textColor="tertiary" textAlign="left">
        What?
      </Heading>
      <List>
        <ListItem>
          Set of utility functions to manage <S type="bold">side effects</S> without using class components. 
        </ListItem>
        <ListItem>
          Already available from React 16.8.
        </ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        Why?
      </Heading>
      <Text textAlign="left">
        In React, the class components have several shortcomings: 
      </Text>
      <List>
        <ListItem>
          The <Code>class</Code> reserved word <S type="italic">lies</S>.
        </ListItem>
        <ListItem>
          Involve the use of <Code>this</Code>.
        </ListItem>
        <ListItem>
          Code is organised by lifecycle stage and not by domain. 
        </ListItem>
        <ListItem>
          Poor option to manage state
        </ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        Classes in Javascript?
      </Heading>
      <CodePane lang="javascript" source={classExample0} />
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        What is this?
      </Heading>
      <Text>
        Bindings
      </Text>
      <CodePane lang="javascript" source={classExample0} />
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        Nested containers
      </Heading>
      <Text>
        Bindings
      </Text>
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        Basic hooks
      </Heading>
      <Text>
        <Code>useState</Code> and <Code>useEffect</Code>
      </Text>
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        useState
      </Heading>
      <Text>
        <Code>useState</Code>
      </Text>
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        useEffect
      </Heading>
      <Text>
        <Code>useEffect</Code>
      </Text>
    </Slide>
    {/* <Slide bgColor="tertiary">
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
    </Slide> */}
  </Deck>
);

export default Presentation;