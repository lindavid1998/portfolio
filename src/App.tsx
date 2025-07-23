import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Skills />
      <WorkExperience />
    </div>
  );
}

export default App;
