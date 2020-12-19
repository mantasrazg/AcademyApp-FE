import { storiesOf } from "@storybook/react";
import React from "react";
import Section from "./Section";

storiesOf("Section", module)
  .add("Full-width Section", () => (
    <Section background="#eee" fullWidth={true}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, magni!
      Unde quidem aperiam, debitis repudiandae odio minima sint accusamus, nulla
      nostrum blanditiis alias animi doloribus ea enim illo, beatae molestiae?
    </Section>
  ))
  .add("Fixed-width Section", () => (
    <Section background="#eee" fullWidth={false}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, magni!
      Unde quidem aperiam, debitis repudiandae odio minima sint accusamus, nulla
      nostrum blanditiis alias animi doloribus ea enim illo, beatae molestiae?
    </Section>
  ))
  .add("Transparent Section", () => (
    <Section fullWidth={false}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, magni!
      Unde quidem aperiam, debitis repudiandae odio minima sint accusamus, nulla
      nostrum blanditiis alias animi doloribus ea enim illo, beatae molestiae?
    </Section>
  ));
