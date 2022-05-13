import React from 'react';
import Header from './components/Header/index';
import { Container, Content } from './styles';

export default function DefaultLayout({ children }: { children: any }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
}
