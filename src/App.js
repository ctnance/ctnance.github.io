import { Header, IntroSection, ProjectsSection } from "./components/index";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <IntroSection />
        <ProjectsSection />
      </main>
    </>
  );
}

export default App;
