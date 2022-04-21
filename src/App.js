import {
  Header,
  IntroSection,
  ProjectsSection,
  AboutSection,
  Footer,
} from "./components/index";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <IntroSection />
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
