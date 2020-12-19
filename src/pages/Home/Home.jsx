import React from "react";
import { Button, Section } from "../../components";

function Home() {
  return (
    <>
      <Section background="#eee">
        Welcome to your React boilerplate. We hope that this will bring you up
        to speed with your development.
      </Section>
      <Section>
        <Button color={"primary"} handleClick={() => alert("Hello")}>
          Click me!
        </Button>{" "}
      </Section>
    </>
  );
}

export default Home;
