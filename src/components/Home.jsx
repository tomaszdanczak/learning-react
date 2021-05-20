import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Jumbotron>
      <Container>
        <h1>Learning React</h1>
        <p>
          This is my work with book Learning React by{" "}
          <a href="https://www.kirupa.com/react/">Kirupa Chinnathambi</a>
        </p>
        <Button
          href="https://helion.pl/ksiazki/react-i-redux-praktyczne-tworzenie-aplikacji-www-wydanie-ii-kirupa-chinnathambi,rerew2.htm#format/d"
          variant="primary"
        >
          See book
        </Button>
      </Container>
    </Jumbotron>
  );
};

export default Home;
