import GitHubStats from "./components/GithubStats";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="flex flex-col gap-16 p-8">
      <Hero />
      <Skills />
      <WorkExperience />
      <GitHubStats />
    </div>
  );
}

export default App;
