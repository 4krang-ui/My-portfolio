
  import { Hero, About } from "./Components/HeroAbout";
import { Skills, Contact } from "./Components/SkillsContact";
import { Navbar } from "./Components/navbar";
import {Projects} from "./Components/projects"

function App() {
  return (
    <main style={{  padding: "0 1.5rem" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;