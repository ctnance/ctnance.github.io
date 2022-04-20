import { Header, IntroSection, ProjectsSection, Footer } from "./components/index";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <IntroSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
