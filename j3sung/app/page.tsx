import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Archiving from "./components/Archiving";

export default function Home() {
  return (
    <>
      <header className="sm:sticky sm:-top-[500px] sm:z-50">
        <Nav />
        <Header />
      </header>
      <main>
        <AboutMe />
        <Skills />
        <Experience />
        <Project />
        <Archiving />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
