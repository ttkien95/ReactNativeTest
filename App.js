import React from 'react';
import {
  Container, Header, Left, Body, Title, Right, Text, Content
} from 'native-base';

const App = () => (
  <Container>
    <Header transparent>
      <Left />
      <Body>
        <Title>Tiki</Title>
      </Body>
      <Right />
    </Header>
    <Content bounces={false} padder centerContent>
      <Text style={{ textAlign: 'center' }}>Chào mừng bạn đến với Tiki</Text>
    </Content>
  </Container>
);

export default App;
