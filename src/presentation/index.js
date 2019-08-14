/* eslint-disable import/no-webpack-loader-syntax */
// Import React
import React, { useState } from 'react';

import classExample0 from '!raw-loader!./code/class-example-0.js';
import classExample1 from '!raw-loader!./code/class-example-1.js';
import thisExample0 from '!raw-loader!./code/this-example-0.js';
import thisExample1 from '!raw-loader!./code/this-example-1.js';
import lifecycleMethodsExample0 from '!raw-loader!./code/lifecycle-methods-example-0.js.txt';
import useStateExample0 from '!raw-loader!./code/use-state-example-0.js';
import useEffectExample from '!raw-loader!./code/use-effect-example-0.js';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  ComponentPlayground,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Text,
  S,
  Layout,
  Fit,
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
    contentWidth={1080}
    transition={['fade']}
    theme={theme}
    transitionDuration={300}
  >
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        React Hooks: What and Why.
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1}>
        Armand Adroher
      </Text>
      <Text margin="10px 0 0" textColor="tertiary" size={1}>
        Software Engineer at BBC Education
      </Text>
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        Full disclosure
      </Heading>
      <List>
        <ListItem>🐥 No expert whatsoever.</ListItem>
        <ListItem>🧠 A topic for a discussion.</ListItem>
        <ListItem>🙋 Please help me!</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        What?
      </Heading>
      <List>
        <ListItem>Already available from React 16.8.</ListItem>
        <ListItem>
          Set of utility functions to manage <S type="bold">side effects</S>{' '}
          without using class components.
        </ListItem>
      </List>
      <Text> f: (x ↦ y = f(x)) ⇒ 🚀</Text>
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        Why?
      </Heading>
      <Text textAlign="left">Class components present some difficulties:</Text>
      <List>
        <ListItem>
          The <Code>class</Code> reserved word <S type="italic">lies</S>.
        </ListItem>
        <ListItem>
          They involve the use of <Code>this</Code>.
        </ListItem>
        <ListItem>Code is organised by lifecycle method.</ListItem>
        <ListItem>🍝 Poor option to manage the state.</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        Classes in Javascript?
      </Heading>
      <CodePane
        theme="light"
        textSize="24px"
        lang="javascript"
        source={classExample0}
      />
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        "Classes" in Javascript
      </Heading>
      <CodePane
        theme="light"
        textSize="24px"
        lang="javascript"
        source={classExample1}
      />
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        What is <S type="italic">this</S>?
      </Heading>
      <CodePane
        theme="light"
        textSize="24px"
        lang="javascript"
        source={thisExample0}
      />
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        What is <S type="italic">this</S> (bound)?
      </Heading>
      <CodePane
        theme="light"
        textSize="24px"
        lang="javascript"
        source={thisExample1}
      />
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        Where are my callbacks?
      </Heading>
      <CodePane
        theme="light"
        textSize="24px"
        lang="javascript"
        source={lifecycleMethodsExample0}
      />
    </Slide>
    <Slide>
      <Heading size={3} textColor="tertiary" fit>
        🎣 Basic hooks
      </Heading>
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        useState
      </Heading>
      <CodePane
        theme="light"
        textSize="22px"
        lang="javascript"
        source={useStateExample0}
      />
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        useEffect
      </Heading>
      <CodePane
        theme="light"
        textSize="22px"
        lang="javascript"
        source={useEffectExample}
      />
    </Slide>
    <Slide>
      <Heading fit>💪 See them in action</Heading>
    </Slide>
    <Slide>
      <Heading size={4} textColor="tertiary" textAlign="left">
        Additional hooks
      </Heading>
      <Layout>
        <List padding="0 16px" fit>
          <ListItem>useContext</ListItem>
          <ListItem>useReducer</ListItem>
          <ListItem>useCallback</ListItem>
          <ListItem>useMemo</ListItem>
        </List>
        <List padding="0 32px" fit>
          <ListItem>useRef</ListItem>
          <ListItem>useImperativeHandle</ListItem>
          <ListItem>useLayoutEffect</ListItem>
          <ListItem>useDebugValue</ListItem>
          <ListItem>... roll you own! 🎉</ListItem>
        </List>
      </Layout>
    </Slide>
    <Slide>
      <Heading fit>🤔 Any thoughts? </Heading>
    </Slide>
    <Slide>
      <Heading>Thanks!</Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1}>
        <Link href="https://twitter.com/aadroher">@aadroher</Link>
      </Text>
      <Text margin="10px 0 0" textColor="tertiary" size={1}>
        <Link href="https://armandadroher.name">
          https://armandadroher.name
        </Link>
      </Text>
    </Slide>
  </Deck>
);

export default Presentation;
