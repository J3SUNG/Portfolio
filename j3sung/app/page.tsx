import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Awards from "./components/Awards";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <AboutMe />
        <Skills />
        <Awards />
        <Experience />
        <Project />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
