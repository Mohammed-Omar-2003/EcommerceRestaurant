import One from "./compAbout/One";
import There from "./compAbout/There";
import Two from "./compAbout/Two";
import { Container } from "react-bootstrap";
import "./About.css";
function About() {
  return (
    <div id={"about"}>
      <Container>
        <One />
        <Two />
      </Container>
      <There />
    </div>
  );
}

export default About;
