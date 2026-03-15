import Banner from "./Banner";
import BeachScene from "./BeachScene";
import CloudRevealSection from "./Cloud";
import Coral from "./Coral";
import Lighthouse from "./LightHouse";

export default function Home() {
  return (
<div>
  <Banner/>
  <section id="about">
  <CloudRevealSection/>
  </section>
  <section id="skills">
  <Coral/>
  </section>
  <section id="projects">
  <Lighthouse/>
  </section>
  <BeachScene/>
</div>
  );
}
